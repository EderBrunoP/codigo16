let numero1=10;
let numero2=20;

//para sumar dos number usamos el +
console.log("Sumar:", numero1+numero2);
// para restar usamos el -
console.log("Resta: ",numero1-numero2);
// para multiplicar usamos el *
console.log("Multiplicar:",numero1*numero2);
// para dividir el /
console.log("Dividir: ", numero1/numero2);

//transformar un dato a string
//transforma sun string a number

let numero3="22";
console.log(Number(numero3));
 
let numero4="Luis";
//cuando queremos transformar un dato a number 
//y este no es posible  tendremos como
//resultado NaN=Not a Number

console.log(Number(numero4));
console.log(Number("one"));

// otras formas de transformar un string a Number
let numero5="33.5";
// forma 1
console.log("Forma 1",Number(numero5));
// forma 2
console.log("Forma 2",parseInt(numero5));
// forma 3
console.log("Forma 3",+numero5);
//forma 4
console.log("Forma 4", parseFloat(numero5));

//Math
const operacion= 3*2+10-5/2
//math.sqrt = raiz cuadrada
console.log(Math.sqrt(operacion));

//Math.pow = potencia
console.log(Math.pow(6,3));
console.log(Math.pow(4,3));

//c2= a2 + b2
//c= -/a2+b2

// solicitar datos de navegador
//prompt: muestra una alerta el cual podemos escribir algo
// el valor que coloquemos se guardará en la variable
// ! todo valor recibido en el prompt es un string
const catetoA=Number(prompt("Ingrese el valor de A: "));
const catetoB=Number(prompt("Ingrese el valor de B: "));

const operacion2=Math.sqrt(Math.pow(catetoA,2)+Math.pow(catetoB,2));

console.log("La hipotenusa es:",operacion2);


