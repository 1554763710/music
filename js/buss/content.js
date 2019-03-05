
import * as transform from "../tools/transform";
var oNav = document.querySelector("#wrap .content .main .nav ");
var oNlist = document.querySelector("#wrap .content .main .nav .list");
var eleStartX = 0;
var startX = 0;
var minX =  oNav.offsetWidth - oNlist.clientWidth;
var translateX = 0;
var lastPX = 0;
var disPX = 0;

var disTime = 0;
var lastTime = 0;
oNav.addEventListener("touchstart",function(ev){
    oNlist.style.transition = "none";
    ev = ev || event;
    var touch = ev.changedTouches[0];
    eleStartX = transform.css(oNlist,"translateX");
    startX = touch.clientX;
    lastPX = touch.clientX;
    lastTime = new Date().getTime();

    oNlist.sBool = false;
    disPX = 0;
    disTime = 1;
});
oNav.addEventListener("touchmove",function(ev){
    ev = ev || event;
    var touch = ev.changedTouches[0];
    var nowX = touch.clientX;
    var disX = nowX - startX;
    translateX = eleStartX+disX;
    // 快速滑屏橡皮筋效果
    var nowTime = new Date().getTime();
    disTime = nowTime - lastTime;
    lastTime = nowTime;
    var nowPX = touch.clientX;
    disPX = nowPX - lastPX;
    lastPX = nowPX;
    var scale;
    if(translateX > 0){
        oNlist.sBool = true;
        scale = document.documentElement.clientWidth/(document.documentElement.clientWidth+translateX*2);
        translateX = transform.css(oNlist,"translateX")+disPX*scale;
    }else if(translateX < minX){
        oNlist.sBool = true;
        scale = document.documentElement.clientWidth/(document.documentElement.clientWidth+(minX - translateX)*2);
        translateX = transform.css(oNlist,"translateX")+disPX*scale;
    }
    transform.css(oNlist,"translateX",translateX);
});
oNav.addEventListener("touchend",function(ev){
    ev = ev || event;
    oNlist.style.transition = "";
    if(!oNlist.sBool){
        fastM(disPX,disTime);
    }else{
        if(translateX > 0){
            translateX = 0;
        }else if(translateX < minX){
            translateX = minX;
        }
        oNlist.style.transition = "1s transform";
        transform.css(oNlist,"translateX",translateX);
    }
});
// 快速滑屏
function fastM(disPX,disTime){
    var speed = disPX/disTime;
    speed = Math.abs(speed)<0.5?0:speed;
    var translateX =  transform.css(oNlist,"translateX");
    var transX = translateX + speed*200;
    var bse = "";
    if(transX > 0){
        bse = "cubic-bezier(.09,1.51,.65,1.73)";
        transX = 0;
    }else if(transX < minX){
        bse = "cubic-bezier(.09,1.51,.65,1.73)";
        transX = minX;
    }
    oNlist.style.transition = "1s "+bse+" transform";
    transform.css(oNlist,"translateX",transX);
}
// 变换颜色
changeColor();
function changeColor(){
    var aLi = document.querySelectorAll("#wrap .content .main .nav .list > li");
    var oNav = document.querySelector("#wrap .content .main .nav "); 
    oNav.addEventListener("touchstart",function(){
        oNlist.Bool = false;
    })
    oNav.addEventListener("touchmove",function(){
        oNlist.Bool = true;
    })
    var index = 0;
    for(var i =0;i<aLi.length;i++){
        aLi[i].i = i;
        aLi[i].addEventListener("touchend",function(ev){
            ev = ev || event;
            if(!oNlist.Bool){
                aLi[index].classList.remove("active");
                index = this.i;
                aLi[index].classList.add("active");
            }
        })
    }
}