import'./App.css'
import Titulo from "./components/Titulo"
import Button from "./components/Button"
import Saudacao from "./components/Saudacao"
import Boatarde from "./components/Boatarde"
import If from "./components/If"
import Imagen from "./components/Imagen"
import Lista from "./components/Lista"
import React from "./components/React"

function App (){
    return (
      <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic fugiat, consequatur accusamus beatae doloremque alias nisi totam velit maiores eius laudantium, cum ipsa! Sed corporis quis delectus earum accusamus?
      </p>
      <p>
        Ataque Soviético
      </p>
      <Imagen />
      <Titulo />
      <Button />
      <Saudacao />
      <Boatarde />
      <If />
      <Lista />
      <React />
      </>
      )

  }
  
  export default App