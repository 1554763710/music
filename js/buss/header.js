
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