import { useState } from 'react'
import Componentes from '../../componentes/index'

function App() {
    const [tarefa, setTarefa] = useState("")
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Componentes.Titulo>Todo</Componentes.Titulo>
            <div className="row">
              <div className="col">
                <Componentes.Input 
                  type="text"
                  required={true}
                  placeholder="Digite o nome da tarefa"
                  onChange={(event) => {
                    setTarefa(event.target.value)
                  }}
                />
              </div>
              <div className="col">
                <Componentes.Botao>
                  Salvar
                </Componentes.Botao>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default App
  