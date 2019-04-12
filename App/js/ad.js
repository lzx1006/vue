//获取地址指定参数的值
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return ''; //返回参数值
}

$(document).ready(function() {
  var id = getUrlParam('id');
  
    $.ajax({
      type: "POST",
      url: baseUrl + '/api/Article/getArticleById',
      data: {'id': id},
      success: function (json) {
        
        if (json.status != 1000){
  //        layer.alert(json.msg);
            return false;
        }
        console.log(json);
        
        $('#nd-title').html(json.data.title);
        $('#nd-link').html('来源： ' + json.data.source + ' <span class="time" id="nd-time">' + json.data.create_time + '</span>');
        $('#nd-content').html(json.data.content);
      }
  });
})
