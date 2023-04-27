import { useState } from "react"

function App() {
  const texto = "Contador"
  const [valor, setValor] = useState(10)
  const [nome, setNome] = useState(texto)

  const incrementar = () => {
    if(valor+1 > 15){
      setNome("Não pode atribuir maior que quinze.")
    }else{
      setValor(valor + 1)
    }
  }
  return (
    <>
      <h1>{texto}</h1>
      <p>{nome}</p>
      <div className="container-xl">
        <div className="row text-center">
          <div className="col">
            <button 
              className="btn btn-danger" 
              onClick={function(){
                if(valor-1 < 0){
                  setNome("Não pode atribuir menor que zero.")
                }else{
                  setValor(valor - 1)
                }
              }}
            >Decrementar</button>
          </div>
          <div className="col">
            <h1>{valor}</h1>
          </div>
          <div className="col">
            <button 
              className="btn btn-success"
              onClick={incrementar}
            >Incrementar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
