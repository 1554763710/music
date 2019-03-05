var oWrap = document.querySelector("#wrap");
oWrap.addEventListener("touchstart",function(ev){
    ev = ev ||event;
    ev.preventDefault();
});
var styleN = document.createElement("style");
var w = document.documentElement.clientWidth/16;
styleN.innerHTML = "html{font-size:"+w+"px!important}";
document.head.appendChild(styleN);