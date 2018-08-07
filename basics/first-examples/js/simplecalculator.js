// a+b=c
"use strict";


var a=0;
var b=0;
var plus = false;


console.log(window.cars[0]);

function funcioncalculadora (param) {
    
    switch (param) {
            
        case 1: 
            console.log("el 1");
            if(a===0)
                a=1;
            else if(b===0)
                b=1;
            
            break;
        case 2: 
            console.log("el 2");
            if(a===0)
                a=2;
            else if(b===0)
                b=2;            
            break;      
        case 3: 
            console.log("el 3");
            if(a===0)
                a=3;
            else if(b===0)
                b=3;            
            break;
        case '+': 
            console.log("el +");
            plus = true;
            break;
            
        case '=': 
            console.log("el =");
            if(plus)
                document.getElementById("result").innerHTML=a+b;
            else
                console.log("plus is false");
            break;
            
        case 'c': 
            console.log("el c");
            document.getElementById("result").innerHTML="";
            a=0;
            b=0;
            plus=false;
            break;
            
        default: 
            console.log("impusibla");
            break;
            
            
            
      }
    
    
    
}