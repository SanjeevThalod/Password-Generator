var slide = document.getElementById("slide");
var text = document.getElementById('text');
var p = document.querySelector("p");
var generate = document.getElementById("butn");
var A = false,_o = false,_S = false;
var a = document.getElementById("A");
var b = document.getElementById("0");
var c = document.getElementById("*");
var size = 8;
var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
console.log(abc.length)
var temp = "";

slide.addEventListener('input',function(){
    p.innerText = "Length: "+slide.value;
    slide.style.background = "linear-gradient(90deg,purple "+(slide.value*5)+"% ,silver "+(slide.value*5)+"%)";
    size = slide.value;
});

a.addEventListener('click',function(){
    if(A == false){
        A = true;
    }else{
        A = false;
    }
});
b.addEventListener('click',function(){
    if(_o == false){
        _o = true;
    }else{
        _o = false;
    }
});
c.addEventListener('click',function(){
    if(_S == false){
        _S = true;
    }else{
        _S = false;
    }
});

generate.addEventListener('click',function(){
    if(A == false && _o == false && _S == false){
        for(var i = 0; i < size; i++){
            temp += abc[Math.floor(Math.random()*27)];
        }
    }else if(A == true && _o == false && _S == false){
        for(var i = 0; i < size; i++){
            temp += abc[Math.floor(Math.random()*54)];
        }
    }else if(A == true && _o == true && _S == false){
        for(var i = 0; i < size; i++){
            temp += abc[Math.floor(Math.random()*62)];
        }
    }else if(A == true && _o == true && _S == true){
        for(var i = 0; i < size; i++){
            temp += abc[Math.floor(Math.random()*70)];
        }
    }else if(A == false && _o == true && _S == true){
        for(var i = 0; i < size; i++){
            var t = Math.floor(Math.random()*70);
            console.log(t);
            if(t >= 27 && t <= 53){
                var tu = t-53;
                t += tu + Math.floor(Math.random()*10);
            }
            temp += abc[t];
        }
    }else if(A == true && _o == false && _S == true){
        for(var i = 0; i < size; i++){
            var t = Math.floor(Math.random()*70);
            if(t >= 53 && t <= 62){
                t -= 11;
            }
            temp += abc[t];
        }
    }else if(A == false && _o == true && _S == false){
        for(var i = 0; i < size; i++){
            var t = Math.floor(Math.random()*62);
            if(t >= 27 && t <= 53){
                var tu = 53-t;
                t += tu + Math.floor(Math.random()*8);
            }
            temp += abc[t];
        }
    }else if(A == false && _o == false && _S == true){
        for(var i = 0; i < size; i++){
            var t = Math.floor(Math.random()*70);
            if(t >= 27 && t <= 62){
                var tu = 62 - t;
                t += tu + Math.floor(Math.random()*8);
            }
            temp += abc[ t <= 62 ? 62+i : t];
        }
    }
    text.value = temp;
    temp = "";
});
