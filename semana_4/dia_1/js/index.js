//variable que pueda cambiar de tipo

let numero=10;

//vamor a ver el console.log()
// permite imprimir un valor en la consola del navegador

console.log("Primero tipo",numero);

//podemos cambiar dato
// let o const va solo cuando se crea la variable

numero="Pepe";
console.log("Segundo tipo",numero);

//
console.log(numero);

//!const
const igv=0.18;
console.log("Primer igv",igv);

//existe otra forma de mostrar una variable
//alert: dispara una alrtea en nuestro navegador

//alert(igv);

//concatenación: basicamente es juntar 2 o más variables

const primerNombre="Eder";
const primerApellido="Bruno";
let edad=27;
let dias=20;
let estaVivo=true;
//para concatener dos o más string usamos el operador +

console.log("Concatenación");
console.log(primerNombre+" "+primerApellido + " "+edad);

//en js podemos hacer cualquier tipo de operacion matematica
//+ - * /

console.log(edad+dias);

//para transformar un entero a string
//"27"+"20"="2720"
console.log(String(edad)+String(dias));
// con la , te brinda un espacio entre las variables
console.log("Bool", estaVivo);
console.log("String", String(estaVivo));
