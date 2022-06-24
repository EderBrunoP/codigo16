let angulo = 20;
document.write("<p>" + angulo + "</p>");

let mensaje = "<p>INEXS.</p>";

if (angulo === 0) {
  mensaje = "<p>Nulo.</p>";
} else if (angulo < 90) {
  mensaje = "<p>Águdo.</p>";
} else if (angulo === 90) {
  mensaje = "<p>Recto.</p>";
} else if (angulo < 180) {
  mensaje = "<p>Obtuso.</p>";
} else if (angulo === 180) {
  mensaje = "<p>Llano.</p>";
} else if (angulo < 360) {
  mensaje = "<p>Concavo.</p>";
} else if (angulo === 360) {
  mensaje = "<p>Completo.</p>";
}

document.write(mensaje);


switch (angulo) {
    case 0:
      document.write("<p>Nulo.</p>");
      // despues de ejecutar lo que queremos
      break;
    case 90:
      document.write("<p>React0.</p>");
      break;
    case 180:
      document.write("<p>LLano.</p>");
      break;
    case 360:
      document.write("<p>Completo.</p>");
      break;
  }


  let edad = 10;

switch (edad) {
  case 0:
    console.log("Reicien nacido");
    break;
  case 18:
    console.log("Mayor de edad");
    break;
  case 20:
    console.log("Entro a base 2");
    break;
  case 65:
    console.log("Entro a la 3ra edad");
    break;
  default:
    console.log("Este caso no esta conteplado");
  // !Nota en el defaulta no hace falta poner break porque solo entra
  // !ahi cuando ni una otra opcion funciona
}

// posicion empieza desde 0
const nombres= ["Pepe","Juan","Maria","Luisa","Carlos","Lucar"];

console.log(nombres);
console.log(nombres[3]);
// !nota si queremos mostrar un dato en una posicion que no existe
// ! js retorna un undefined

//length: retorna cantidad de elementos

console.log(nombres.length);


const datos=[1,true,false,-2,"Hola Mundo"];

console.log("datos",datos.length);

//pregunta si quiere acceder al ultimo elemento usando length
console.log("datos",datos[datos.length-1]);

// push: sirve para poder agregar un elemento al array
// lo agrega en la última posición

datos.push("Agregando un dato");
console.log("datos con push",datos);
console.log("Agregando un array dentro de un array");
datos.push(["Pepe","Juan","maria"]);
console.log("Datos total",datos);




const datosPrueba=[
  1,
  true,
  false,
  -2,
  "Hola mundo",
  "Agregando un dato",
  ["Pepe","Juan",[1,2,4,5,[-1,-2,-4]],"Maria"],
];

// para visualizar datos de un array dentro de otro
console.log(datosPrueba[6][0]);
console.log(datosPrueba[6][2][3]);
console.log(datosPrueba[6][2][4][2]);

console.log(datosPrueba[6][2].length); //5

console.log(datosPrueba[6][datosPrueba[6].length-3]);

console.log(
  datosPrueba[6][datosPrueba[6].length-2][datosPrueba[6][2].length-1]
  );

// eliminar elemento final de array
// pop es una función para poder eliminar el último elemento de un array

const laptops=["hp","macbook","asus","lenovo"];
console.log("Laptops:",laptops);
// retornar el elemento eliminado

console.log("Elemento eliminado",laptops.pop());
console.log("Laptops:",laptops);


//supongamos que tengamos una lista de alumnos

const alumnos=["Luis","Juan","Maria","Luciana","Lucas"];
console.log("El alumno "+alumnos.pop()+" fue eliminado");

console.log("Alumnos:",alumnos);

// unshift: esta función agrega un elemento a un array pero en la primera posición

alumnos.unshift("Daniel");

console.log("Agregando con unshift: ",alumnos);

// shift: esta funcion elimina al primer elemento de un array

console.log("Shift",alumnos.shift());
console.log("Alumnos:",alumnos);

// para reemplazar valores solo asignar el valor a la pisición

alumnos[1]="juanito";
console.log("Alumnos:",alumnos);

// indexOf : Esta funcion retorna la posicion en base a un datos
const colores = ["Rojo", "Verde", "Amarillo", "Azul", "Verde", "Morado"];
//Nota si tenemos elementos repetidos va a encontrar al mas cercanos
// en este casi es el 1
//! Es caseSensitive
// Sinsible a mayusculas cuando nos referimos a eso quiere decir que el
// text que se busca debe ser indetico tanto en mayusculo como en  minusculas

//! Si ustedes ponen un valor que no existe este retorna -1
//!* Podemos usar esto para ver si un elemento existe en un array
console.log(colores.indexOf("Verde"));

const busqueda = prompt("Ingrese el color");

if (colores.indexOf(busqueda) !== -1) {
  alert("El color si existe y es " + colores[colores.indexOf(busqueda)]);
} else {
  alert("El color no existe");
}


