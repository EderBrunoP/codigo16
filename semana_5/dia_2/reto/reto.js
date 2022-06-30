const pokemonGo=[
    {
        name: "Bulbasaur",
        imagen: "https://images.gameinfo.io/pokemon/256/p1f87.webp",
        tipo1: "Planta",
        tipo2: "Veneno",
    },
    {
        name: "Ivysaur",
        imagen: "https://images.gameinfo.io/pokemon/256/p2f90.webp",
        tipo1: "Planta",
        tipo2: "Veneno",
    },
    {
        name: "Venusaur",
        imagen: "https://images.gameinfo.io/pokemon/256/p3f93.webp",
        tipo1: "Planta",
        tipo2: "Veneno",
    },
    {
        name: "Charmander",
        imagen: "https://images.gameinfo.io/pokemon/256/p4f96.webp",
        tipo1: "Fuego",
        tipo2: "",
    },
    {
        name: "Charmeleon",
        imagen: "https://images.gameinfo.io/pokemon/256/p5f205.webp",
        tipo1: "Fuego",
        tipo2: "",
    },
    {
        name: "Charizard",
        imagen: "https://images.gameinfo.io/pokemon/256/p6f102.webp",
        tipo1: "Fuego",
        tipo2: "Viento",
    },
    {
        name: "Venusaur",
        imagen: "",
        tipo1: "Planta",
        tipo2: "Veneno",
    },
    {
        name: "Venusaur",
        imagen: "",
        tipo1: "Planta",
        tipo2: "Veneno",
    },
    {
        name: "Venusaur",
        imagen: "",
        tipo1: "Planta",
        tipo2: "Veneno",
    },
    
    
];


const container= document.querySelector(".container");
//   console.log(container); //trae todo el container

// quiero agregar elementos al container
pokemonGo.map((pokemon) => {
    // ahora en esta seccion vamos a crear los card
    // Esto es JS se llama template string => ``
    // Sirve para poder tener texto y variable juntos

    //* simbolo de $ y entres llaves sirve para llamar las variables
    // return `La laptop se llama ${laptop.nombre} y el precio es ${laptop.precioOferta}`;
    container.innerHTML += `
    <div class="card">
        <h4 class="title">${pokemon.name}</h4>
          <div class="container-photo">
          <img
              src=${pokemon.imagen}
              alt=""
              width="300"
          />
          </div>
          <div class="container-tipo">
            <p class="tipo1">  ${pokemon.tipo1}</p>
            <p class="tipo2"> ${pokemon.tipo2}</p>
          </div>
    </div>
     `;
  });