function Lista({dados, Item, titulo, mudaStatus}) {
  
  return (
    <>
      <h4>{titulo}</h4>
      <ul className="list-group">
        {
          dados.map((dado) => {
            return (
              <Item key={dado.id}>
                <div className="my-3 d-flex align-items-center justify-content-between">
                  <p className="m-0">{dado.label}</p>
                  <select value={dado.status} onChange={(event) => mudaStatus(dado.id, event.target.value)}>
                    <option value="todo">Todo</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </Item>
            )
          })
        }
      </ul>
    </>
  )
}

export default Lista
  