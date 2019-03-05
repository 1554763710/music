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
export {
    css
}