//cuando importemos algo de reac procuremos siempre ponerlo al princiipio es una buena practica
import {useState} from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import "./App.css";


function App() {
  const [counter,setCounter]=useState(0);

  // vamor a crear una función que permita aumentar el contador
  const increment = () =>{
    //setCounter: es la función que está cambiando el valor de counter
    // y adentro indico que el nuevo valor es counter+1

    setCounter(counter+1);
  }

  const decrease = () =>{
    setCounter(counter-1);
  }

  return (
    <div className="App">
      <Header />
      <Counter 
      contador ={counter} 
      incrementar={increment}
      decrementar={decrease}
      />
      <Footer />
    </div>
  );
}

export default App;
