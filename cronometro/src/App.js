import { useEffect, useState } from "react";
import Botao from './componentes/Botao'
import Lista from "./componentes/Lista";

function App() {
  const [contagem, setContagem] = useState(0)
  const [ativo, setAtivo] = useState(true)
  const [id, setId] = useState(null)
  const [contador, setContador] = useState(0)
  const [voltas, setVoltas] = useState([])

  useEffect(() => {
    if(ativo){
      const timeoutId = setTimeout(() => {
        setContagem(contagem + 1)
      }, 1000);
      setId(timeoutId)
    }
  }, [contagem, ativo])

  useEffect(() => {
    if(ativo == false){
      setContador(contador + 1)
    }
  }, [ativo])

  return (
    <div className="container">
      <h1 className="text-center">Cronômetro</h1>
      <p>Este é um cronômetro muito legal</p>
      <p>O cronômetro foi parado {contador} vezes</p>

      <p>{contagem}</p>

      <div className="d-flex justify-content-center">
        <Botao estilo="sucesso" clicar={() => {
          clearInterval(id)
          setAtivo(false)
        }}>Stop</Botao>
        
        <Botao estilo={"alerta"} clicar={() => {
          setAtivo(true)
        }}>Start</Botao>
        {
          !ativo ? (<Botao estilo={"perigo"} clicar={() => {
            setContagem(0)
            setContador(0)
          }}>Zerar</Botao>) : (<></>)
        }

        <Botao estilo={"padrao"} clicar={() => {
          setVoltas([...voltas, contagem])
        }}>Volta</Botao>
      </div>

      <Lista 
        dados={voltas}
        Container={({children}) => {
          return (
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
              {children}
            </div>
          )
        }}
        Item={({children, key}) => {
          return (
            <button onClick={() => {
              clearInterval(id)
              setContagem(parseInt(children))
            }} type="button" class="btn btn-primary" key={key}>
              {children}
            </button>
          )
        }}
      />

      <ul className="list-group mt-5">
        {
          voltas.map((volta, index) => (
            <li key={index} className="list-group-item">{volta}</li>
          ))
        }
      </ul>

    </div>
  );
}

export default App;
