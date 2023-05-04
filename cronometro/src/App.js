import { useEffect, useState } from "react";

function App() {
  const [contagem, setContagem] = useState(0)
  const [ativo, setAtivo] = useState(true)
  const [id, setId] = useState(null)
  useEffect(() => {
    if(ativo){
      const timeoutId = setTimeout(() => {
        setContagem(contagem + 1)
      }, 1000);
      setId(timeoutId)
    }
  }, [contagem, ativo])

  return (
    <div>
      <h1>Cronometro</h1>
      <p>Este é um cronômetro muito legal</p>

      <p>{contagem}</p>

      <button onClick={() => {
        clearInterval(id)
        setAtivo(false)
      }}>Stop</button>
      <button onClick={() => {
        setAtivo(true)
      }}>Start</button>
      {
        !ativo ? (<button onClick={() => {
          setContagem(0)
        }}>Zerar</button>) : (<></>)
      }

    </div>
  );
}

export default App;
