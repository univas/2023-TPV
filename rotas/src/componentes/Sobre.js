import { useLoaderData } from "react-router-dom"

function Sobre(){
    const valor = useLoaderData()
    return (
        <h1>Sobre {valor}</h1>
    )
}

export function loader({params}){
    return params.valor
}

export default Sobre