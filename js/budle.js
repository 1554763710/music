/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return css; });
function css(node,change,val){
    if(arguments.length >=3){
        var text = "";
        if(!node.transform){
            node.transform = {};
        }
        node.transform[change] = val;
        for(var item in node.transform){
            switch (item) {
                case "translate":
                case "translateX":
                case "translateY":
                case "translateZ":
                    text += item+"("+node.transform[item]+"px)";
                    break;
                case "rotate":
                case "rotateX":
                case "rotateY":
                case "rotateZ":
                    text += item+"("+node.transform[item]+"deg)";
                    break;
                case "scale":
                    text += item+"("+node.transform[item]+")";
                    break;
            }
        } 
        node.style.transform = text;
    }else if(arguments.length == 2){
        val = node.transform?node.transform[change]:undefined;
        if(val == undefined){
            val = 0;
            if(change =="scale"){
                val = 1;
            }
        }
        return val;
    }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buss_base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buss_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__buss_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buss_header__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buss_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__buss_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buss_content__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buss_contenttap__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buss_slide__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buss_lengthways__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_transform__ = __webpack_require__(0);








window.onload = function(){
    var arr=["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg"];
    __WEBPACK_IMPORTED_MODULE_4__buss_slide__["a" /* course */](arr);
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
            var translateY = (__WEBPACK_IMPORTED_MODULE_6__tools_transform__["a" /* css */](oMain,"translateY")/(oMain.offsetHeight-oContent.clientHeight))*(document.documentElement.clientHeight-oBar.offsetHeight);
            __WEBPACK_IMPORTED_MODULE_6__tools_transform__["a" /* css */](oBar,"translateY",-translateY);
            if(__WEBPACK_IMPORTED_MODULE_6__tools_transform__["a" /* css */](oBar,"translateY") > oHead.offsetHeight){
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
    __WEBPACK_IMPORTED_MODULE_5__buss_lengthways__["a" /* lengthways */](scrollBar);
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var oWrap = document.querySelector("#wrap");
oWrap.addEventListener("touchstart",function(ev){
    ev = ev ||event;
    ev.preventDefault();
});
var styleN = document.createElement("style");
var w = document.documentElement.clientWidth/16;
styleN.innerHTML = "html{font-size:"+w+"px!important}";
document.head.appendChild(styleN);

/***/ }),
/* 3 */
/***/ (function(module, exports) {


var oWrap = document.querySelector("#wrap");
var oBth = document.querySelector("#wrap .header .h-top .bth");
var oMask = document.querySelector("#wrap .header .mask");
var oInpT = document.querySelector("#wrap .header .h-bottom input[type='text']");
var bool = false;
oBth.addEventListener("touchstart",function(ev){
    ev = ev || event;
    if(bool){
        this.classList.remove("active");
        oMask.style.display = "none";
    }else{
        this.classList.add("active");
        oMask.style.display = "block";
    }
    bool = !bool;
    ev.stopPropagation();
    ev.preventDefault();
});
oWrap.addEventListener("touchstart",function(){
    if(bool){
        oBth.classList.remove("active");
        oMask.style.display = "none";
        bool = !bool;
    }
    oInpT.blur();
})
oMask.addEventListener("touchstart",function(ev){
    ev = ev || event;
    ev.stopPropagation();
    ev.preventDefault();
});

oInpT.addEventListener("touchstart",function(ev){
    ev = ev || event;
    this.focus();
    ev.stopPropagation();
    ev.preventDefault();
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_transform__ = __webpack_require__(0);


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
    eleStartX = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oNlist,"translateX");
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
        translateX = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oNlist,"translateX")+disPX*scale;
    }else if(translateX < minX){
        oNlist.sBool = true;
        scale = document.documentElement.clientWidth/(document.documentElement.clientWidth+(minX - translateX)*2);
        translateX = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oNlist,"translateX")+disPX*scale;
    }
    __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oNlist,"translateX",translateX);
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
        __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oNlist,"translateX",translateX);
    }
});
// 快速滑屏
function fastM(disPX,disTime){
    var speed = disPX/disTime;
    speed = Math.abs(speed)<0.5?0:speed;
    var translateX =  __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oNlist,"translateX");
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
    __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oNlist,"translateX",transX);
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

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_transform__ = __webpack_require__(0);

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
    __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](aTcontent,"translateX",-x);
    var elePoint = {x:0,y:0}
    var startPoint = {x:0,y:0}
    var disPoint = {x:0,y:0}
    var isX = true;
    var fristX = true;
    aTcontent.addEventListener("touchstart",function(ev){
        ev = ev || event;
        aTcontent.style.transition = "";
        var touchC = ev.changedTouches[0];
        elePoint.x = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](aTcontent,"translateX");
        elePoint.y = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](aTcontent,"translateY");
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
        __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](aTcontent,"translateX",translateX);
        jump(aTcontent,disPoint.x)
        
    });
    aTcontent.addEventListener("touchend",function(){
        if(Math.abs(disPoint.x) < x/2){
            aTcontent.style.transition = "1s transform";
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](aTcontent,"translateX", -x);
        }
    });
}
function jump(aTcontent,disX){
    if(Math.abs(disX) >= x/2){
        aTcontent.flag = true;
        aTcontent.style.transition = "1s transform";
        if(disX > 0){
            aTcontent.index--;
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](aTcontent,"translateX",0);
        }else if(disX < 0){
            aTcontent.index++;
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](aTcontent,"translateX",-2*x);
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
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oSub,"translateX",aNa[aTcontent.index].offsetLeft);
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](aTcontent,"translateX",-x);
            aTcontent.flag = false;
        },3000);
    }
    
    
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return course; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_transform__ = __webpack_require__(0);

    
    function course(arr) {
        var wrapC = document.querySelector(".course-wrap");
        if(!wrapC){
            return;
        }

        //����html�ṹ
        var wrapC = document.querySelector(".course-wrap");
        var ulNode = document.createElement("ul");
        var liNodes = document.querySelectorAll(".course-wrap > .list > li");
        var wrapP = document.querySelector(".course-wrap > .course-point");

        __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](ulNode,"translateZ",0);

        //�޷� && �Զ��ֲ�
        var pointsLength = arr.length;
        var needWF = wrapC.getAttribute("needWF")
        var needAuto = wrapC.getAttribute("needAuto");
        needAuto= needAuto==null?false:true;
        needWF  = needWF==null?false:true;
        if(needWF){
            arr = arr.concat(arr);
        }
        ulNode.size =arr.length;

        //����ͼƬ�б�
        ulNode.classList.add("list");
        for(var i=0;i<arr.length;i++){
            ulNode.innerHTML+="<li><img src= "+(arr[i])+"></li>";
        }
        wrapC.appendChild(ulNode);

        //��̬����ʽ
        var styleNode = document.createElement("style");
        styleNode.innerHTML=".course-wrap > .list{width: "+arr.length+"00%}";
        styleNode.innerHTML+=".course-wrap > .list > li{width: "+(100/arr.length)+"%;}";
        document.head.appendChild(styleNode);


        //�����߼�
        var eleStartX = 0; // Ԫ��һ��ʼ��λ��
        var eleStartY = 0; // Ԫ��һ��ʼ��λ��
        var startX = 0;    // ��ָһ��ʼ��λ��
        var startY = 0;    // ��ָһ��ʼ��λ��
        var index = 0;    //  ��ָ̧��ʱul��λ��

        //������
        var isFirst = true;
        var isX = true;  // true:x   false:y

        wrapC.addEventListener("touchstart",function (ev) {
            //�嶨ʱ��
            clearInterval(ulNode.timer);

            //�����
            ulNode.style.transition="";
            ev = ev || event;
            var touchC = ev.changedTouches[0];


            /*�޷��߼�
                �����һ���һ��ʱ �����ڶ���ĵ�һ��
                ����ڶ������һ��ʱ ������һ������һ��*/
            if(needWF){
                var whichPic = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](ulNode,"translateX") / document.documentElement.clientWidth;
                if(whichPic === 0){
                    whichPic = -pointsLength;
                }else if (whichPic === 1-arr.length){
                    whichPic = 1-pointsLength;
                }
                __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](ulNode,"translateX",whichPic*document.documentElement.clientWidth)
            }

            //Ԫ��һ��ʼλ�õĻ�ȡһ��Ҫ���޷�λ�ó�ʼ�����
            eleStartX =__WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](ulNode,"translateX");
            eleStartY =__WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](ulNode,"translateY");
            startX = touchC.clientX;
            startY = touchC.clientY;

            isX = true;
            isFirst = true;
        })
        wrapC.addEventListener("touchmove",function (ev) {

            //���Ź�   ���Ķ��ǵڶ���֮��Ķ���
            if(!isX){
                //ҧס
                return;
            }


            ev = ev || event;
            var touchC = ev.changedTouches[0];
            var nowX = touchC.clientX;
            var nowY = touchC.clientY;

            var disX = nowX - startX;
            var disY = nowY - startY;

            /*������:
                ���ֲ�ͼ�� ����û��״λ����ķ�����x��  ���ֲ�ͼ��������������������
                ���ֲ�ͼ�� ����û��״λ����ķ�����y��  ������ҳ���������������������*/


            if(isFirst){
                isFirst = false;
                if(Math.abs(disY) > Math.abs(disX)){
                    //��y���ϻ�
                    isX=false;
                     return; // �״���Y���ϻ�  �״η�����
                }
            }

           __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](ulNode,"translateX",eleStartX + disX);
        })
        wrapC.addEventListener("touchend",function () {
            ulNode.style.transition=".5s transform";
            //index ����ul��λ��
            index = Math.round(__WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](ulNode,"translateX") / document.documentElement.clientWidth);

            //���Ƴ���
            if(index>0){
                index=0;
            }else if(index < 1-arr.length){
                index =  1-arr.length;
            }

            //СԲ��
            smallPointMove(index);

            //index ����ul��λ��
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](ulNode,"translateX",index*document.documentElement.clientWidth);

            //���¿����Զ��ֲ�
            if(needAuto&&needWF){
                autoMove(ulNode,index,arr,pointsLength);
            }
        })


        //СԲ��
        smallPoint(pointsLength);

        //�Զ��ֲ�
        if(needAuto&&needWF){
            autoMove(ulNode,index,arr,pointsLength);
        }
    }

    function autoMove(ulNode,autoFlag,arr,pointsLength) {
        //var timer = 0;
        //var autoFlag = 0; // ����ul��λ��

        move();
        function move() {
            clearInterval(ulNode.timer);
            ulNode.timer = setInterval(function () {
                autoFlag--;
                if(autoFlag<1-arr.length){
                    ulNode.style.transition="";
                    autoFlag = -pointsLength;
                }
                ulNode.style.transition=".7s transform linear";
                __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](ulNode,"translateX",autoFlag*document.documentElement.clientWidth);

                //СԲ��
                smallPointMove(autoFlag)
            },1000)
        }

        ulNode.addEventListener("transitionend",function () {
            if(autoFlag === 1-ulNode.size){
                autoFlag=-((ulNode.size)/2-1);
                ulNode.style.transition="";
                __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](ulNode,"translateX",autoFlag*document.documentElement.clientWidth);
            }
        })
    }
    function smallPoint(pointsLength){
        var wrapP = document.querySelector(".course-wrap > .course-point");
        wrapP.pointsLength =pointsLength;
        if(wrapP){
            for(var i=0;i<pointsLength;i++){
                if(i==0){
                    wrapP.innerHTML+="<span class='active'></span>";
                }else {
                    wrapP.innerHTML+="<span></span>";
                }
            }
        }
    }
    function smallPointMove(index){
        var wrapP = document.querySelector(".course-wrap > .course-point");
        if(wrapP){
            var points = wrapP.querySelectorAll("span");
            for(var i=0;i<points.length;i++){
                points[i].classList.remove("active");
            }
            points[-index%wrapP.pointsLength].classList.add("active")
        }
    }
    


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lengthways; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_transform__ = __webpack_require__(0);

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
        eleStartY = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oMain,"translateY");
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
            translateY = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oMain,"translateY")+disPY*scale;
        }else if(translateY < minY){
            oMain.sBool = true;
            scale = this.offsetHeight/(this.offsetHeight+(minY - translateY)*2);
            translateY = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oMain,"translateY")+disPY*scale;
        }
        __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oMain,"translateY",translateY);
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
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oMain,"translateY",translateY);
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
        var translateY =  __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oMain,"translateY");
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
        var b = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oMain,"translateY");
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
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* css */](oMain,"translateY",(Tween[type](t,b,c,d)));
            if(scrollBar && (typeof scrollBar["move"]).toLowerCase() =="function"){
                scrollBar["move"]();
            }
        },1000/60)
        
    }
}



/***/ })
/******/ ]);