// // container:
// const div_container = document.getElementById('container');

// // Objetos
// class Carro {

//     constructor(_color, _velocidad) {
//         this.color = _color;
//         this.velocidad = _velocidad;
//     }

//     presentacion() {
//         const texto = "Hola soy un carro de color " + this.color
//         + " y tengo una velocidad de: " + this.velocidad + "kmh";
//         return texto;
//     }
// }

// const carro_rojo = new Carro('ROJO', 200); // instanciar objeto
// const carro_azul = new Carro('AZUL', 50); // dar vida al objeto
// const carro_verde = new Carro('VERDE', 100); // crear el objeto

// div_container.innerHTML += "<p>" + carro_rojo.presentacion() + "</p>";
// div_container.innerHTML += "<hr>";
// div_container.innerHTML += "<p>" + carro_azul.presentacion() + "</p>";
// div_container.innerHTML += "<hr>";
// div_container.innerHTML += "<p>" + carro_verde.presentacion() + "</p>";

// /*----------------------------------------*/
// // container:
// const div_container = document.getElementById('container');

// class User {

//     static cantidad = 0; // NO se llama con this. sino con static

//     constructor(_first_name, _last_name) {
//         User.cantidad++;
//         this.id = User.cantidad;
//         this.first_name = _first_name;
//         this.last_name = _last_name;
        
//     }
//     // Propiedad calculada: fullName
//     get fullName() {
//         return this.first_name + " " + this.last_name;
//     }
//     set fullName(_fullname) {
//         this.first_name = _fullname.split(" ")[0];
//         this.last_name = _fullname.split(" ")[1];
//     }

//     static getCantidad() {
//         return User.cantidad;
//     }
// }

// User. // clase muerta puede acceder a prop y meth static.
// u1 = new User() // objeto vivo NO puede acceder a prop y meth static.

const u1 = new User("bruno", "diaz");
const u2 = new User("linder", "hass");
const u3 = new User("jaime", "farfan");
const u4 = new User("pepito", "perez");
const u5 = new User("juan", "perez");

div_container.innerHTML += "<p>" + u1.fullName + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + u2.fullName + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + u3.fullName + "</p>";
div_container.innerHTML += "<hr>";

console.log(User.getCantidad());
// console.log(u1.getCantidad()) NO FUNCIONA porque es static.
console.log(u3.id)
/*----------------------------------------*/

div_container.innerHTML += "<hr>";

// Utilizando FOR dentro una function "crearCarros(x, color)": 
// - crear X carros.
// - todos del color que recibió la función.
// pero cada carro con velocidades diferentes.
// imprimir todos los carros en el container.

