import { useState } from "react"

function App() {
  const texto = "Contador"
  const [valor, setValor] = useState(10)
  const [nome, setNome] = useState(texto)
  const [valorIncremental, setValorIncremental] = useState(0)

  const incrementar = () => {
    if(valor+1 > 15){
      setNome("Não pode atribuir maior que quinze.")
    }else{
      setValor(valor + 1)
    }
  }

  const decrementar = function(){
    if(valor-valorIncremental < 0){
      setNome("Não pode atribuir menor que zero.")
    }else{
      setValor(valor - valorIncremental)
    }
  }
  console.log(valorIncremental)
  return (
    <>
      <h1>{texto}</h1>
      <input
        type="number" 
        className="form-control"
        value={valorIncremental}
        onChange={(event) => {
          setValorIncremental(parseInt(event.target.value)) 
        }}
      />
      <p>{nome}</p>
      <div className="container-xl">
        <div className="row text-center">
          <div className="col">
            <button 
              className="btn btn-danger" 
              onClick={decrementar}
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
