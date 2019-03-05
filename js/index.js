
import {} from "./buss/base";
import {} from "./buss/header";
import {} from "./buss/content";
import {} from "./buss/contenttap";
import * as slide from "./buss/slide";
import * as app from "./buss/lengthways";
import * as transform from "./tools/transform";
window.onload = function(){
    var arr=["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg"];
    slide.course(arr);
    var oBar = document.querySelector("#wrap .bar");
    var oContent = document.querySelector(".content");
    var oMain = document.querySelector(".content .main");
    var oHead = document.querySelector("#wrap .header");
    var oHbottom = document.querySelector("#wrap .header .h-bottom");
    var oSearch = document.querySelector("#wrap .header .h-top .search");
    
    oMain.isMoveS = false;
    // oMain.isShow = 1;
    var scrollBar = {
        start:function(){
            var y = (oContent.clientHeight/oMain.offsetHeight)*document.documentElement.clientHeight;
            oBar.style.height = y + "px";
            oBar.style.opacity = 1;
            oMain.boolS = false;
        },
        move:function(){
            oBar.style.opacity = 1;
            var translateY = (transform.css(oMain,"translateY")/(oMain.offsetHeight-oContent.clientHeight))*(document.documentElement.clientHeight-oBar.offsetHeight);
            transform.css(oBar,"translateY",-translateY);
            if(transform.css(oBar,"translateY") > oHead.offsetHeight){
                oHbottom.style.display = "none";
                oMain.boolS = true;
                oMain.isMoveS = true;
            }else{
                oHbottom.style.display = "block";
                oMain.isMoveS = false;
            }
            if(oMain.isShow){
                oHbottom.style.display = "block";
                oMain.boolS = false;
            }
            oContent.style.top = oHead.offsetHeight +"px";
        },
        end:function(){
            oBar.style.opacity = 0;
        },
        over:function(){
            oBar.style.opacity = 0;
        }
    }
    oSearch.addEventListener("touchstart",function(){
        if(!oMain.isMoveS){
            return;
        }
        if(oMain.boolS){
            oHbottom.style.display = "block";
            oMain.isShow = true;
        }else{
            oHbottom.style.display = "none";
            oMain.isShow = false;
        }
        oContent.style.top = oHead.offsetHeight +"px";
        oMain.boolS = !oMain.boolS;
    })
    app.lengthways(scrollBar);
}