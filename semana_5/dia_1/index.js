// Array de Objetos
const users = [
    {
      name: "Linder",
      lastName: "Hassinger",
      phoneNumber: "99999999",
      address: "Calle falsa 123",
      isDeveloper: true,
      age: 22,
    },
    {
      name: "Juan",
      lastName: "Zapata",
      phoneNumber: "99999999",
      address: "Calle falsa 1234",
      isDeveloper: false,
      age: 21,
    },
  ];
  
  for (let user in users) {
    console.log(users[user].name);
  }
  
  console.log("================");
  
  for (let user of users) {
    console.log(user.name);
  }


  //* DOM

//Document Object Model

//quersySelector nos permite accedr a elementos
const variableH1=document.querySelector("h1");
//* innerHTML= se usa para escribir etiquetas
//* innerText= para poder escribir dentro de las etiquetas
variableH1.innerText="Cambiando el valor del h1 desde Js";
console.log(variableH1);

//podremos cambiar el tittle desde Js
document.title="Lo hicimos en Js";

//tagname = nombre de la etiqueta
//<h1></h1> = h1
//<div></div> = div

//Sepan que tambien podemos modiciar el css
//la forma para poder modificar ls estilos de nuestrs
//pagina es usando style.

//!Nota: las propiedades son las mismas que css sin embargo no usa guiones

//! en Js se usa camellcase

document.body.style.backgroundColor="#c3c3c3"
document.body.style.fontFamily="Helvetica";

//* Lo recomendable no es usar CSS dentro de JS
variableH1.style.color="blue";

//! nota: en JS todo es un objeto





















