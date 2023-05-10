function Botao({ children, clicar, estilo }){
    return (
        <button
         onClick={clicar}
         className={`mx-2 btn ${mapeamentoDeEstilos[estilo]}`}
        >{children}</button>
    )
}

const mapeamentoDeEstilos = {
    "sucesso" : "btn-success",
    "alerta" : "btn-warning",
    "perigo" : "btn-danger",
    "padrao" : "btn-primary"
}

export default Botao