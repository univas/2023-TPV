window.addEventListener("load", function(){
    const botaoAdd = document.getElementById("botao-add")

    botaoAdd.onclick = () => {
        const inputAdd = document.getElementById("input-add")
        const lista = document.getElementById("lista")

        if(inputAdd.value != ""){
            const itemLista = document.createElement("li")
            itemLista.classList.add("list-group-item")
    
            const texto = document.createTextNode(inputAdd.value)
            itemLista.append(texto)
            lista.append(itemLista)
            inputAdd.value = ""
        }
    }

    const botaoOk = document.getElementById("botao-ok")

    botaoOk.addEventListener("click", function(){
        const inputOk = document.getElementById("input-ok")
        const valorPesquisado = inputOk.value

        const lista = document.getElementById("lista")
        let contador = 0
        for(let i = 0; i < lista.children.length; i++){
            const item = lista.children[i]
            const textoDoItem = item.innerText

            if(valorPesquisado == textoDoItem){
                item.style.fontWeight = "bold"
            }else{
                contador++
            }
            
        }

        if(contador == lista.children.length){
            const alert = document.createElement("div")
            alert.classList.add("alert", "alert-danger")
            // alert.classList.add("")
            alert.setAttribute("role", "alert")
            alert.innerText = "Conteúdo não encontrado"

            document
                .getElementById("msg-error")
                .append(alert)
        }
    })
})

