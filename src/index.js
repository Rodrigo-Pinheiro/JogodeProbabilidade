import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";



function App() {
  //entrada rodando fim 
  const [estado,setEstado] = useState ('Entrada')

  // Palpite da maquina
  const [palpite,setPalpite] = useState (150)
  const [meupalpite,setMeuPalpite] = useState (1)

  const [min, setMin] = useState (0)
  const [max, setMax] = useState (300)

  const iniciarJogo = () =>{
      setEstado ('RODANDO')
      setMin (0)
      setMax (300)
      setMeuPalpite (1)
      setPalpite (150)

  }

  if(estado ==='Entrada'){
    return <button onClick= {iniciarJogo}>Começar a Jogar</button>

  }
  // 0 <> 300
  
  const Menor = () => {
    setMeuPalpite (meupalpite +1)
    setMax (palpite)
    const proxPalpite = parseInt((palpite - min) /2 ) + min
    setPalpite(proxPalpite)

  }
  const Maior = () => {
    setMeuPalpite (meupalpite +1)
    setMin (palpite)
    const proxPalpite = parseInt((max - palpite) /2 ) + palpite 
    setPalpite (proxPalpite)

  }
    const Acertou = () => {
        setEstado('fim')
    }
        if(estado === 'fim'){
          return (
            <div> 
              <p>Acertei o numero {palpite} com {meupalpite}chute!</p>
            <button onClick = {iniciarJogo}> Iniciar Novamente!</button>
            </div>
          )


        }
      
      return (
    <div className="App">
    <p>Seu Numero é {palpite}</p>
    <p>min {min} max {max}</p>
     <button onClick={Menor} >Menor!</button>
     <button onClick= {Acertou}>Acertou!</button>
     <button onClick={Maior} >Maior!</button>
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);