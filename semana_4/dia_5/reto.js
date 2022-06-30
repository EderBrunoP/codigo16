// reto: crear una vista la cual tenga un input y boton
let resultado;
function multiplicar(numero){
    const n1=Number(numero);
    if (isNaN(n1)) {
    alert(numero+" no es número válido");
    }
   return n1
}

function Resultado_multiplicar(){
    let numero_ingresado=document.getElementById("input_number").value;
    const resultado=multiplicar(numero_ingresado);

    const container = document.querySelector(".container");
    for (let j=1; j<=10;j++){
        container.innerHTML +=
      "<p>"+numero_ingresado+" x "+j +" = "+ resultado+"</p>";
    }
    
}