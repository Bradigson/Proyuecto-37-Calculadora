let a;
let b;
let c;

function calculadora(){


    let limpiar = document.getElementById("delete");
    let resultado = document.getElementById("resultado");
    let porciento = document.getElementById("porciento");
    let mas = document.getElementById("mas");
    let menos = document.getElementById("menos");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    let dividir = document.getElementById("dividir");
    let foru = document.getElementById("flour");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let multiplicar = document.getElementById("multiplicar");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let igual = document.getElementById("igual");
    let cero = document.getElementById("cero");
    let point = document.getElementById("point");

  


seven.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
eight.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}

nine.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}



four.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
five.onclick = function (e){
    resultado.textContent = resultado.textContent + "5";
}
six.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}



one.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}
two.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
three.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}


cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}

limpiar.onclick = function(e){
    resultado.textContent="";
}

    


mas.onclick = function (e){
    a = resultado.textContent;
    c = "+";
    limpia();
}
menos.onclick = function(e){
    a = resultado.textContent;
    c = "-";
    limpia();

}
multiplicar.onclick = function(e){
    a = resultado.textContent;
    c = "*";
    limpia();
}

dividir.onclick = function(e){
    a = resultado.textContent;
    c = "÷"
    limpia();
}


igual.onclick = function(e){
    b =  resultado.textContent;
    resolver();
}

}

function limpia(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    a=0;
    b=0;
    c="";

}

function resolver(){
    let res = 0;
    switch(c){

        case "+":
            res = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            res = parseFloat(a) - parseFloat(b);
            break;    
        case "*":
            res = parseFloat(a) * parseFloat(b);
            break;
        case "÷" :
            res = parseFloat(a) / parseFloat(b);
            break;       
    }
    
    resultado.textContent = res;
}