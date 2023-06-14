import axios from 'axios'
import { useEffect, useState } from 'react'
import Componentes from '../../componentes/index'

function App() {
    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState([])
    const mudaStatus = function(id, status_novo){
      const dados = tarefas.map((dado, i) => {
        if(dado.id == id){
          dado.status = status_novo
        }

        return dado
      })

      setTarefas(dados)
    }

    const insereTarefa = () => {
      const tarefaCriada = {label: tarefa, status: 'todo'}
      axios.post("http://localhost:3000/tarefa", tarefaCriada)
        .then((res) => {
          setTarefas([...tarefas, res.data])
          alert("tarefa cadastrada com sucesso")
        })
        .catch((err) => {
          alert("Não foi possível cadastrar a tarefa")
        })
      
      
      
    }

    useEffect(() => {
      axios.get("http://localhost:3000/tarefa")
        .then((res) => {
          const dados = res.data
          setTarefas(dados)
        })
        .catch((err) => {
          alert("Não foi possível buscar tarefas")
        })
    }, [])

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
                <Componentes.Botao onClick={() => insereTarefa()}>
                  Salvar
                </Componentes.Botao>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <Componentes.Lista 
                  titulo = "Todo"
                  mudaStatus={mudaStatus}
                  dados={tarefas.filter(item => item.status == "todo")}
                  Item={Componentes.Item_Lista}
                >
                </Componentes.Lista>
              </div>
              <div className="col border-end border-start">
                <Componentes.Lista 
                  titulo = "Doing"
                  mudaStatus={mudaStatus}
                  dados={tarefas.filter(item => item.status == "doing")}
                  Item={Componentes.Item_Lista}
                >
                </Componentes.Lista>
              </div>
              <div className="col">
                <Componentes.Lista 
                  titulo = "Done"
                  mudaStatus={mudaStatus}
                  dados={tarefas.filter(item => item.status == "done")}
                  Item={Componentes.Item_Lista}
                >
                </Componentes.Lista>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default App
  