import { useRouteError } from "react-router-dom"

function PaginaDeErro(){

    const erros = useRouteError()
    return (
        <div>
            <h1>Ops! Um erro ocorreu.</h1>
            <p>
                <i>{ erros.statusText || erros.message }</i>
            </p>
        </div>
    )
}

export default PaginaDeErro