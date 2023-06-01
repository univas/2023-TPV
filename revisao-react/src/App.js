import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App({title}) {
  const [estado, setEstado] = useState("Valor Inicial")
  const [nome, setNome] = useState("Marcos")
  
  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/pessoa")
    .then(res => {
      setPessoas(res.data)
    })
    .catch(err => {
      alert("API está indisponível")
    })
  }, [])

  
  return (
    <>
      <ul>
        {
          pessoas.map((pessoa, index) => (
            <li key={index}>{pessoa.nome}</li>
          ))
        }
      </ul>
      <div>
        <button onClick={() => {}}>Alterar Estado</button>
      </div>
    </>
  );
}

export default App;
