import * as transform from "../tools/transform";
var oCtap = document.querySelector("#wrap .content .main .content-tap");
var aTcontent = document.querySelectorAll("#wrap .content .main .content-tap .tap-content");
var aLoadings = document.querySelectorAll(".loading");
var aNa = oCtap.querySelectorAll(".tap-nav a");
var oSub = oCtap.querySelector(".tap-nav .sub");
setTimeout(function(){
    for(var i=0;i<aLoadings.length;i++){
        aLoadings[i].style.height = aTcontent[0].offsetHeight +"px";
    }
},200);
var x = oCtap.clientWidth;
for(var i=0;i<aTcontent.length;i++){
    aTcontent[i].index = 0;
    move(aTcontent[i]);
}
function move(aTcontent){
    transform.css(aTcontent,"translateX",-x);
    var elePoint = {x:0,y:0}
    var startPoint = {x:0,y:0}
    var disPoint = {x:0,y:0}
    var isX = true;
    var fristX = true;
    aTcontent.addEventListener("touchstart",function(ev){
        ev = ev || event;
        aTcontent.style.transition = "";
        var touchC = ev.changedTouches[0];
        elePoint.x = transform.css(aTcontent,"translateX");
        elePoint.y = transform.css(aTcontent,"translateY");
        startPoint.x = touchC.clientX;
        startPoint.y = touchC.clientY;
        isX = true;
        fristX = true;
    });
    aTcontent.addEventListener("touchmove",function(ev){
        
        ev = ev || event;
        if(!isX){
            return;
        }
        if(aTcontent.flag){
            return;
        }
        var touchC = ev.changedTouches[0];
        var nowPoint = {x:0,y:0}
        nowPoint.x = touchC.clientX;
        nowPoint.y = touchC.clientY;
        disPoint.x = nowPoint.x - startPoint.x;
        disPoint.y = nowPoint.y - startPoint.y;
        var translateX = disPoint.x+elePoint.x;
        if(fristX){
            fristX = false;
            if(Math.abs(disPoint.y) > Math.abs(disPoint.x)){
                isX = false;
                return;
            }
        }
        transform.css(aTcontent,"translateX",translateX);
        jump(aTcontent,disPoint.x)
        
    });
    aTcontent.addEventListener("touchend",function(){
        if(Math.abs(disPoint.x) < x/2){
            aTcontent.style.transition = "1s transform";
            transform.css(aTcontent,"translateX", -x);
        }
    });
}
function jump(aTcontent,disX){
    if(Math.abs(disX) >= x/2){
        aTcontent.flag = true;
        aTcontent.style.transition = "1s transform";
        if(disX > 0){
            aTcontent.index--;
            transform.css(aTcontent,"translateX",0);
        }else if(disX < 0){
            aTcontent.index++;
            transform.css(aTcontent,"translateX",-2*x);
        }
    } 
    var aLoading = aTcontent.querySelectorAll(".loading");
    var aImg = aTcontent.querySelectorAll(".list li a img");
    var aNa = aTcontent.parentNode.querySelectorAll(".tap-nav a");
    var oSub = aTcontent.parentNode.querySelector(".tap-nav .sub");
    aTcontent.index = aTcontent.index < 0?aNa.length-1:aTcontent.index;
    aTcontent.index = aTcontent.index > aNa.length-1?0:aTcontent.index;
    aTcontent.addEventListener("transitionend",end)
    function end(){
        aTcontent.removeEventListener("transitionend",end);
        for(var i=0;i<aLoading.length;i++){
            aLoading[i].style.opacity = 1;
        }
        setTimeout(function(){
            aTcontent.style.transition = "";
            var arr = [
                ["./img/a.jpg","./img/b.jpg","./img/c.jpg","./img/d.jpg","./img/e.jpg","./img/f.jpg",],
                ["./img/2/a2.jpg","./img/2/b2.png","./img/2/c2.png","./img/2/d2.png","./img/2/e2.jpg","./img/2/f2.jpg",],
                ["./img/a.jpg","./img/b.jpg","./img/c.jpg","./img/d.jpg","./img/e.jpg","./img/f.jpg",],
                ["./img/2/a2.jpg","./img/2/b2.png","./img/2/c2.png","./img/2/d2.png","./img/2/e2.jpg","./img/2/f2.jpg",],
                ["./img/a.jpg","./img/b.jpg","./img/c.jpg","./img/d.jpg","./img/e.jpg","./img/f.jpg",],
                ["./img/2/a2.jpg","./img/2/b2.png","./img/2/c2.png","./img/2/d2.png","./img/2/e2.jpg","./img/2/f2.jpg",],
            ]
            for(var i=0;i<aImg.length;i++){
                aImg[i].src = arr[aTcontent.index][i];
            }
            oSub.style.width = aNa[aTcontent.index].offsetWidth + "px";
            transform.css(oSub,"translateX",aNa[aTcontent.index].offsetLeft);
            transform.css(aTcontent,"translateX",-x);
            aTcontent.flag = false;
        },3000);
    }
    
    
}