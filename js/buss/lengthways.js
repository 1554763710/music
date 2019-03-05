import * as transform from "../tools/transform";
function lengthways(scrollBar){
    var oContent = document.querySelector(".content");
    var oMain = document.querySelector(".content .main");
    var eleStartY = 0;
    var start = {x:0,y:0};
    var minY =  0;
    var translateY = 0;
    var lastPY = 0;
    var disPY = 0;
    setTimeout(function(){
        minY =  oContent.offsetHeight- oMain.clientHeight;
    },20)

    var disTime = 0;
    var lastTime = 0;

    // 防抖动
    var isY = true;
    var fristY = true;

    var fTimer = 0;
    oContent.addEventListener("touchstart",function(ev){
        // 即点即停
        clearInterval(fTimer);
        oMain.style.transition = "none";
        ev = ev || event;
        var touch = ev.changedTouches[0];
        eleStartY = transform.css(oMain,"translateY");
        start.y = touch.clientY;
        start.x = touch.clientX;
        lastPY = touch.clientY;
        lastTime = new Date().getTime();
        oMain.sBool = false;
        disPY = 0;
        disTime = 1;

        isY = true;
        fristY = true;
        if(scrollBar && (typeof scrollBar["start"]).toLowerCase() =="function"){
            scrollBar["start"]();
        }
    });
    oContent.addEventListener("touchmove",function(ev){
        if(!isY){
            return;
        }
        ev = ev || event;
        var touch = ev.changedTouches[0];
        var now = {x:0,y:0};
        var dis = {x:0,y:0};
        now.y = touch.clientY;
        now.x = touch.clientX;
        dis.y = now.y -  start.y;
        dis.x = now.x -  start.x;
        translateY = eleStartY+dis.y;

        if(fristY){
            fristY = false;
            if(Math.abs(dis.y) < Math.abs(dis.x)){
                isY = false;
                return;
            }
        }
        // 快速滑屏橡皮筋效果
        var nowTime = new Date().getTime();
        disTime = nowTime - lastTime;
        lastTime = nowTime;
        var nowPY = touch.clientY;
        disPY = nowPY - lastPY;
        lastPY = nowPY;
        var scale;
        if(translateY > 0){
            oMain.sBool = true;
            scale = this.offsetHeight/(this.offsetHeight+translateY*2);
            translateY = transform.css(oMain,"translateY")+disPY*scale;
        }else if(translateY < minY){
            oMain.sBool = true;
            scale = this.offsetHeight/(this.offsetHeight+(minY - translateY)*2);
            translateY = transform.css(oMain,"translateY")+disPY*scale;
        }
        transform.css(oMain,"translateY",translateY);
        if(scrollBar && (typeof scrollBar["move"]).toLowerCase() =="function"){
            scrollBar["move"]();
        }
    });
    oContent.addEventListener("touchend",function(ev){
        ev = ev || event;
        oMain.style.transition = "";
        if(!oMain.sBool){
            fastM(disPY,disTime);
        }else{
            if(translateY > 0){
                translateY = 0;
            }else if(translateY < minY){
                translateY = minY;
            }
            oMain.style.transition = "1s transform";
            transform.css(oMain,"translateY",translateY);
        }
        if(scrollBar && (typeof scrollBar["end"]).toLowerCase() =="function"){
            scrollBar["end"]();
        }
    });
    // 快速滑屏
    function fastM(disPY,disTime){
        var speed = disPY/disTime;
        speed = Math.abs(speed)<0.5?0:speed;
        speed = speed<-15?-15:speed;
        speed = speed>15?15:speed;
        var translateY =  transform.css(oMain,"translateY");
        var transY = translateY + speed*200;
        var time = speed*0.2;
        time = time>2?2:time;
        time = time<0.4?0.5:time;
        var type = "Linear";
        if(transY > 0){
            type = "Back";
            transY = 0;
        }else if(transY < minY){
            type = "Back";
            transY = minY;
        }
        fn(type,translateY,(transY-translateY),time);

    }
    function fn(type,startY,changeY,time){
        var t = 0;
        var b = transform.css(oMain,"translateY");
        var c = changeY;
        var d = (time*2000)/(1000/60);
        var Tween = {
            Linear: function(t,b,c,d){ return c*t/d + b; },
            Back: function(t,b,c,d,s){
                if (s == undefined) s = 1.70158;
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
            }
        }
        clearInterval(fTimer);
        fTimer = setInterval(function(){
            t++;
            if(t>d){
                clearInterval(fTimer);
                if(scrollBar && (typeof scrollBar["over"]).toLowerCase() =="function"){
                    scrollBar["over"]();
                    return;
                }
            }
            transform.css(oMain,"translateY",(Tween[type](t,b,c,d)));
            if(scrollBar && (typeof scrollBar["move"]).toLowerCase() =="function"){
                scrollBar["move"]();
            }
        },1000/60)
        
    }
}
export{
    lengthways
}
