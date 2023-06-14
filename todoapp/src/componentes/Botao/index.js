function Botao({children, onClick}) {
    return (
      <button className="btn btn-success" onClick={onClick}>
        {children}
      </button>
    )
  }
  
  export default Botao
  