$(document).ready(function() {
  var Browser=new Object();
  Browser.userAgent=window.navigator.userAgent.toLowerCase();
  Browser.ie=/msie/.test(Browser.userAgent);
  Browser.Moz=/gecko/.test(Browser.userAgent);
  
  //判断是否加载完成
  function Imagess(url,imgid,callback){    
    var val=url;
    var img=new Image();
    if(Browser.ie){
      img.onreadystatechange =function(){  
        //当它的加载状态变成 complete 或loaded时
          if(img.readyState=="complete"||img.readyState=="loaded"){
              callback(img,imgid);
          }
      }        
    }else if(Browser.Moz){
      img.onload=function(){
          if(img.complete==true){
              callback(img,imgid);
          }
      }        
    }    
    //如果因为网络或图片的原因发生异常，则显示该图片
    img.onerror=function(){img.src="http://www.86y.org/images/failed.png"}
    img.src=val;
  }
  
  //显示图片
  function checkimg(obj,imgid){
    document.getElementById(imgid).style.cssText="";
    document.getElementById(imgid).src=obj.src;
  }
  //初始化需要显示的图片，并且指定显示的位置
  window.onload=function(){
    //获得需要加载的img对象列表
    var imglist=document.getElementById("banner-list").getElementsByTagName('img');
    //遍历该对象列表
    for(i=0;i<imglist.length;i++)
    {   //给对象设置id值，设置未加载成功之前的默认图片
        imglist[i].id="img0"+i;
        imglist[i].style = "background:url(http://www.86y.org/images/loading.gif) no-repeat center center;";
        Imagess(imglist[i].getAttribute("data"),imglist[i].id,checkimg);
    }
  }
});