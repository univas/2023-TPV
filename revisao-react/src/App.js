import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App({title}) {
  const [nome, setNome] = useState("")
  
  const [pessoas, setPessoas] = useState([])

  const [estaCarregando, setEstaCarregando] = useState(true)

  useEffect(() => {
    if(estaCarregando){
      axios.get("http://localhost:3000/pessoa")
      .then(res => {
        setPessoas(res.data)
        setEstaCarregando(false)
      })
      .catch(err => {
        alert("API está indisponível")
      })
    }
  }, [estaCarregando])

  return estaCarregando ? (<h1 id='carregando'>Carregando</h1>) : (
    <>
      <label>Nome</label>
      <input onChange={(event) => {
        const valor = event.target.value

        setNome(valor)
      }} value={nome}/>
      <ul>
        {
          pessoas.map((pessoa, index) => (
            <li key={index} onClick={() => {
              axios.get("http://localhost:3000/pessoa/"+pessoa.id)
              .then((res) => {
                alert(res.data.cargo)
              }).catch(err => {
                alert("não foi possível localizar")
              })
            }}>{pessoa.nome}</li>
          ))
        }
      </ul>
      <div>
        <button onClick={() => {
          axios.post("http://localhost:3000/pessoa", {
            nome, cargo: ""
          }).then((qualquerOutraCoisa) => {
            setNome("")
            setEstaCarregando(true)
            alert("salvo com sucesso")
          }).catch((err) => {
            alert("ocorreu um erro")
          })
        }}>Alterar Estado</button>
      </div>
    </>
  );
}

export default App;
