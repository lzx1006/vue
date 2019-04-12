
/*----全局数据----*/
var _selectParam = {
currency_trade_id: getUrlParam('currency_trade_id'),
currency_id: getUrlParam('currency_id'),
currency_trade_mark: getUrlParam('currency_trade_mark'), // APP需要多传的数据
currency_mark: getUrlParam('currency_mark'), // APP需要多传的数据
//currency_trade_id: 1,
//currency_id: 2
}
var wsKEchart = null; //K线图长连接对象
var timeType = 'min5';//默认为5分钟线
var dataLast;

//获取地址指定参数的值
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return ''; //返回参数值
}

/*----K线图，深度图数据----*/
var tradeDetail = {};
  tradeDetail.kEchart = {
    /*
     * 图表样式静态参数设置
     */
    option : {
//      backgroundColor: "rgba(23, 26, 63, 0)",
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
//          showContent: false,
            formatter:function(params) {
//            console.log(params);
//            $('.tooltip-open').html(params[0].data[1]);
              $('.tooltip-high').html(params[0].data[3]);
              $('.tooltip-low').html(params[0].data[4]);
//            $('.tooltip-close').html(params[0].data[2]);
              var res = 'K线<br/>时间：' + params[0].axisValue + '<br/>开盘：' + params[0].data[1] + '<br/>' + '收盘：' + params[0].data[2] + '<br/>' + '最高：' + params[0].data[3] + '<br/>' + '最低：' + params[0].data[4] + '<br/>';
              return res;
              
            }
        },
        legend: {
          show: false,
//          data: ['K线', 'MA5', 'MA10', 'MA20', 'MA30']
            data: ['K线']
        },
        grid: {
            left: '10px',
//          right: '6%',
            top: '15px',
            bottom: '8%'
        },
        xAxis: {
            type: 'category',
//            data: data0.categoryData,
            scale: true,
             axisLine: {
                show: true,
                lineStyle: {
                    color: "#393e5b"
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: "#898da6"
                }
            },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
            
        },
        yAxis: {
            position: "right",
            scale: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                color: "rgb(51, 54, 86)",
                width: 1,
                type: "dashed"
                }
            },
            axisLabel: {
                textStyle: {
                color: "#898da6"
                }
            }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 80,
                end: 100
            }
        ],
         series: [
            {
                name: 'K线',
                type: 'candlestick',
//                data: data0.values,
                itemStyle: {
                    normal: {
                        color: '#ec0000',
                        color0: '#00da3c',
                        borderColor: '#8A0000',
                        borderColor0: '#008F28'
                    }
                },  
            }
           ]
    },
    splitData: function(rawData) {
      var categoryData = [];
        var values = []
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            values.push(rawData[i])
        }
        return {
            categoryData: categoryData,
            values: values
        };
    },
    /*
     * @param rawData: 要渲染的数据
     * @param myChart: 图表对象
     */
    renderEchart: function(myChart, data0) {
      myChart.setOption(tradeDetail.kEchart.option);
      //K线图
      var option = {
          xAxis: {
              data: data0.categoryData
          },
          series: [
              {
                  data: data0.values
              }
          ]
      };
      
      
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
  tradeDetail.wsSendData = function() {
    var sendData = {
      "trade_area_id": _selectParam.currency_trade_id,
      "currency_id": _selectParam.currency_id,
      "time_type": timeType,
      "request_type": "kline"
    };
//  console.log(JSON.stringify(sendData));
    wsKEchart.send(JSON.stringify(sendData));  
  }
  tradeDetail.deepEchart = {
    option: {
      color: ["#37c769", "#fe5c5c"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
//          showContent: false,
            formatter:function(params) {
//            console.log(params);
              var res = ' 委托价： ' + params[0].data[0] + '<br/> 累计： ' + params[0].data[1];
              return res;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : {
            type : 'value',
            axisLine: {
            show: true,
            lineStyle: {
              color: "#393e5b"
            }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: "#898da6"
                }
            },
            boundaryGap : false,
        },
        grid: {
            left: '10px',
//          right: '6%',
            top: '20px',
            bottom: '8%'
        },
        yAxis: {
            position: "right",
            scale: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgb(51, 54, 86)",
                    width: 1,
                    type: "dashed"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#898da6"
                }
            }
        },
        series : [
              {
                  name:'',
                  smooth: false,
                  itemStyle: {
                      normal: {
                          areaStyle: {
                              type: "default",
                              color: "#37c769"
                          }
                      }
                  },
                  type:'line',
                  areaStyle: {normal: {}},
//                  data:[0, 0, 0, 0, 30, 90, 120]
              },
              {
                  name:'',
                  smooth: false,
                  type:'line',
                  itemStyle: {
                      normal: {
                          areaStyle: {
                              type: "default",
                              color: "#fe5c5c"
                          }
                      }
                },
                areaStyle: {normal: {}},
//              data:[120, 90, 30,0, 0, 0, 0]
            }
        ]
    },
    /*
     * @param rawData: 要渲染的数据
     * @param deepChart: 图表对象
     */
    renderEchart: function(deepChart, rawData, xData) {
      deepChart.setOption(tradeDetail.deepEchart.option);
      var option = {
          series: [
              {
                  data: rawData.buy_ress
              },
              {
                  data: rawData.sell_ress
              }
          ]
      };
      
      // 使用刚指定的配置项和数据显示图表。
      deepChart.setOption(option);
    }
  
    
  }

  tradeDetail.deepEchartDataGet = function() {
    var deepChart = echarts.init(document.getElementById('deep-echart'));
      tradeDetail.deepEchart.renderEchart(deepChart, []);
        $.ajax({
          type: "POST",
            data: {
              'currency_trade_id': _selectParam.currency_trade_id,
              'currency_id': _selectParam.currency_id
            },
            url: baseUrl + '/api/TradeCenter/getTradeDepthTrend',
            success: function(res) {
//            console.log('深度图数据渲染'); 
//            console.log(res);
              if (res.status != 1000){
                    return false;
               }
              tradeDetail.deepEchart.renderEchart(deepChart, res.data);
            }
        })
  }
  tradeDetail.echartChange = function() {
    $('#echart-tap-k').bind('click', function() {
      $('.deep-echart-container').addClass('hidden');
      $('.k-echart-container').removeClass('hidden');
      $('.k-echart-btn').removeClass('hidden');
      $(this).addClass('active').siblings().removeClass('active');
    })
    $('#echart-tap-deep').bind('click', function() {
      $(this).addClass('active').siblings().removeClass('active');
      $('.k-echart-container').addClass('hidden');
      $('.deep-echart-container').removeClass('hidden');
      $('.k-echart-btn').addClass('hidden');
      tradeDetail.deepEchartDataGet();
    })
  }

  tradeDetail.kTypeClick = function(myChart) {
    $('.k-echart-btn').bind('click', function(ev) {
      ev = ev || window.event;
      var target = ev.target || ev.srcElement;
      
      if(target.nodeName.toLowerCase() == 'div'){
        var kType = target.dataset.type;
        timeType = kType;
        
        if(wsKEchart) {
//        console.log('timeType的值', timeType)
          tradeDetail.wsSendData();     
        } 
        
        $(target).addClass('active').siblings().removeClass('active');
      }
    })
  }

/*----获取币种详情数据----*/
function setCurrencyTradeInfo() {
  $.ajax({
    type: "POST",
      data: {
//        'uid': _selectParam.uid,
          'currency_trade_id': _selectParam.currency_trade_id,
          'currency_id': _selectParam.currency_id
      },
      url: baseUrl + '/api/TradeCenter/getCurrencyTradeInfo',
      success: function(res) {
        if (res.status != 1000){
              return false;
        }
      //买入--卖出
//      $('#sell-by-title span').html(_selectParam.currency_mark);
        //渲染筛选头部数据
        $('.last_price').html(res.data.last_price);
        var last_price_cny = (parseFloat(res.data.last_price) * parseFloat(res.data.exchange_cny_price)).toFixed(2);
        
        $('.trade_up_down').html(res.data.trade_up_down);
        $('#big_price').html(res.data.big_price);
        $('#small_price').html(res.data.small_price);
        $('#trade_count_num').html(parseFloat(res.data.trade_count_num).toFixed(2));
        var htmlStr = '';
        if (parseFloat(res.data.trade_up_down.split('%')[0]) >= 0) {
            htmlStr = '<span class="c-green">+' + res.data.trade_up_down + '</span>';
        } else {
            htmlStr = '<span class="c-red">' + res.data.trade_up_down + '</span>';
        }
        $('.last_price_cny').html(' ≈ ' + last_price_cny + 'CNY' + htmlStr);
      }
  })
}

var myChart = echarts.init(document.getElementById('k-echart'));
myChart.on('click', function () {
//$('.tooltip-open').html(dataLast[1]);
  $('.tooltip-high').html(dataLast[3]);
  $('.tooltip-low').html(dataLast[4]);
//$('.tooltip-close').html(dataLast[2]);
});
$(document).ready(function() {
    
    //与后台建立长连接
    var kDataGetInterval;

    if("WebSocket" in window) {
      wsKEchart = new WebSocket(tradeUrl);
      wsKEchart.onopen = function() {
        tradeDetail.wsSendData();
          
        //添加定时器，每隔一段时间向后台发送一次数据
        kDataGetInterval = window.setInterval(function(){
          tradeDetail.wsSendData();
//        console.log('数据已发送');
        },7000);
      }
       wsKEchart.onmessage = function (evt) 
       { 
          if(evt.data !== '我收到你的信息了'){
            var _kData = JSON.parse(evt.data).data;
            
//          console.log('----输出K线图数据---', JSON.parse(evt.data));
            var data0 = tradeDetail.kEchart.splitData(_kData);
//          console.log('----输出K线图数据---', data0);
            tradeDetail.kEchart.renderEchart(myChart, data0);
            var values = data0.values;
            dataLast = values[values.length - 1];
//          $('.tooltip-open').html(dataLast[1]);
            $('.tooltip-high').html(dataLast[3]);
            $('.tooltip-low').html(dataLast[4]);
//          $('.tooltip-close').html(dataLast[2]);
          }   
       }
        wsKEchart.onclose = function() {
        }
    }

  tradeDetail.kTypeClick(myChart);
  tradeDetail.deepEchartDataGet();
  setCurrencyTradeInfo();
})


//  ---最新买卖盘数据

$(document).ready(function() {
  var ws;
  var tradeDataGetInterval;
  var plateData;

function sendData() {
  var sendData1 = {
    "trade_area_id": getUrlParam('currency_trade_id'),
    "currency_id": getUrlParam('currency_id'),
    "is_more_plate": 0,
    "request_type": "plate",
    "lang": "zn"
  };
  console.log('------------------');
  console.log(sendData1);
  if(ws.readyState === 1) {
      ws.send(JSON.stringify(sendData1));
    }
}

ws = new WebSocket(tradeUrl);

ws.onopen = function() {
    sendData();
  //添加定时器，每隔一段时间向后台发送一次数据
  tradeDataGetInterval = setInterval(function(){
     sendData();
    console.log('---最新买卖盘  数据已发送');
  },8000)
}

ws.onmessage = function(e) {
  plateData = JSON.parse(e.data).data;
  console.log('----原数据--', plateData);

  if(plateData.trade_plate) {
    var listStr = '';
    var pData = plateData.trade_plate;
    var length;
    pData.trade_buy.length > pData.trade_sell.length ? length = pData.trade_buy.length :  length = pData.trade_sell.length;
    for (var i = 0; i < length; i++) {
      var temp_trade_num_buy = pData.trade_buy[i] ? parseFloat(pData.trade_buy[i].trade_num_buy).toFixed(5) : '';
      var tempBuyNum = pData.trade_buy[i] ? (i+1) : '';
      var tempSellNum = pData.trade_sell[i] ? (i+1) : '';
      var temp_price = pData.trade_buy[i] ? parseFloat(pData.trade_buy[i].price).toFixed(2) : '';
      var temp_price1 = pData.trade_sell[i] ? parseFloat(pData.trade_sell[i].price).toFixed(2) : ''; 
      var temp_trade_num_sell = pData.trade_sell[i] ? parseFloat(pData.trade_sell[i].trade_num_sell).toFixed(5) : '';  
      listStr += '<tr><td class="t-left">' + tempBuyNum + '</td><td class="t-left">' + temp_trade_num_buy + '</td><td class="buy-sell-price"><span class="c-green t-center">' + temp_price + '</span> &nbsp;&nbsp;&nbsp; <span class="c-red t-center">' + temp_price1 + '</span></td><td class="t-right">' + temp_trade_num_sell + '</td><td class="t-right">' + tempSellNum + '</td></tr>';
    }
    $('#trade-plant tbody').html(listStr);
  }
  
  if(plateData.trade_list) {
    var listStr1 = '';
    var pData1 = plateData.trade_list;
    for (var i = 0; i < pData1.length; i++) {
      var typeStr = '';
      if(pData1[i].trade_type == 'buy') {
        typeStr = '<span class="c-green">买</span>';
      } else {
        typeStr = '<span class="c-green">卖</span>';
      }
      listStr1 += '<tr><td class="t-left">' + pData1[i].orders_time + '</td><td class="t-left">' + typeStr + '</td><td class="t-left">' + pData1[i].trade_price + '</td><td class="t-left">' + pData1[i].trade_success_num + '</td></tr>';
    }
    $('#new-deal tbody').html(listStr1);
  }
  
}

$('.trade-area-name').html(_selectParam.currency_trade_mark);

$('.currency_mark').html(_selectParam.currency_mark);

// 深度 成交 切换
$('.deep-title>div').bind('click', function(ev) {
  ev = ev || window.event;
  var target = ev.target || ev.srcElement;
  
  if(target.nodeName.toLowerCase() == 'div'){
    $(target).addClass('active').siblings().removeClass('active');
    var idStr = '#' + $(target).data('name');
    $(idStr).removeClass('hidden').siblings().addClass('hidden');
  }
})

  // 渲染简介
  
  $.ajax({
    type: "POST",
      data: {
        'lang': 'zn',
        'currency_id': _selectParam.currency_id
      },
      url: baseUrl + '/api/TradeCenter/getCurrencyIntroduce',
      success: function(res) {
        if (res.status != 1000){
              return false;
         }
        
        $('.currency_name').html(res.data.currency_name);
        $('.developer').html(res.data.researchers);
        $('.compertime').html(res.data.compertime);
        
        $('.block_time').html(res.data.block_time);
        $('.block_rewards').html(res.data.block_rewards);
        
        $('.issued_num').html(res.data.issued_num);
        $('.issued_time').html(res.data.issued_time);
        
        $('.des-content p').html(res.data.currency_content);
        
        $('.currency_logo').attr('src', res.data.currency_logo);
        $('.currency_mark1').html(res.data.currency_mark);
      }
  })
});
