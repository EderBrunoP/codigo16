//Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.
// Funcion que reciba 4 parametros valide si son numeros y si todo esta ok que retorne el promedio

// los valores pueden por inputs o por prompt

const calcularPromedio = () => {
    const nota1 = Number(document.querySelector("#input_nota1").value);
    const nota2 = Number(document.querySelector("#input_nota2").value);
    const nota3 = Number(document.querySelector("#input_nota3").value);
    const nota4 = Number(document.querySelector("#input_nota4").value);
    const resultado2 = document.querySelector(".resultado2");
  
    if (isNaN(nota1) || isNaN(nota2) ||  isNaN(nota3) || isNaN(nota4)) {
      alert("Ingrese numeros validos");
      return;
    }
  
    if (nota1 > 20) {
      alert("La nota 1 no debe ser mayor a 20");
      return;
    }
  
    if (nota2 > 20) {
      alert("La nota 2 no debe ser mayor a 20");
      return;
    }
  
    if (nota3 > 20) {
      alert("La nota 3 no debe ser mayor a 20");
      return;
    }
  
    if (nota4 > 20) {
      alert("La nota 4 no debe ser mayor a 20");
      return;
    }
  
    const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    resultado2.innerHTML = "<p>El pomedio es: " + promedio + "</p>";
  };

