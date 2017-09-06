

(function(){

    var cuadrado = document.getElementById('test');
    
    
    cuadrado.onmouseenter = function(){
    
        cuadrado.style.backgroundColor = "";
    };

    cuadrado.onmouseleave = function(){
        
            cuadrado.style.backgroundColor ="red";
    
    };
        
})()
//var cuadrado = document.getElementById('test');
