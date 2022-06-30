//EVENTOS

// un evento es una acción que el usuario o el
// navegador puede activar

//* onclick => se activa cuando el usuario usa el mouse y clickea un elemento
// para activar los eventos podemos hacer desde js o desde el html

//  onchange
// onkeyup
// onkeydown
// onsubmit
// onmousehover

const btnTest = document.querySelector("#btn-test");

// evento onclick con arrow function
btnTest.onclick = () => {
  console.log("Es un click");
};

//* evento onclick con function
// btnTest.onclick = function () {
//   console.log("Es un click");
// };

const variableH1=document.querySelector("#h1-test");
variableH1.onclick= ()=>{
    console.log("Click desde el h1");
    variableH1.innerText="Cambiando el texto";
}


//! Funcion impura no retorna valor
//! Funcion pura retorna valor


// vamos a capturar los datos de nuestro formulario
// y guardarlos en un array de objetos

const users=[];

const form=document.querySelector("#form-store-user");

// vamos a agregar el evento onsubmit
//! Nota: el evento onsubmit tiene una propiedd
//! la cual nos da un parametro que esta implicito
//! este parametro contiene la informacion del evento
//! y se suele event o e

form.onsubmit=(event)=>{
    //* Nota: un form al tener el evento submit
    // va a recagar la página
    //? para evitar que el evento onsubmit recargue la pagina podemos usar el
    //? evento.preventDefault() esta funcion bloquea esa accion de recargar la pagina
    event.preventDefault();
    // console.log(event.target);

    //! nota la informaición de los inputs siempre esta en el target


     // * Existe la clase FormData
  const formData = new FormData(event.target);

  // vamos a crar un objeto user
  const user = {};

  for (let dato of formData.entries()) {
    // ['name', 'Linder']
    // ['last_name', 'Hassinger']
    console.log("key", dato[0]);
    console.log("value", dato[1]);
    console.log("---------------");
    // en el for vamos a agregar los campos a user
    //car["doors"] = 5
    user[dato[0]] = dato[1];
  }

  users.push(user);
};

//! NOTA Dos objetos nunca pueden ser igual
// ejemplo
const car = {
    modelo: "BMW i18",
  };
  
  const car2 = {
    modelo: "BMW i18",
  };
  
  //!La teoria dice que un objeto nunca sera igual a otro, es decir
  //!asi los objetas tengan el mismo contenido nunca sera iguales 