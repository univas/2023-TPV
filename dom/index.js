window.addEventListener("load", function(){
    setTimeout(() => {
        addText()

    }, 1000)
})

const addText = () => {
    // adicionando texto a um elemento
    const titulo = document.getElementById("titulo")
    titulo.innerText = "Hello World!" // InnerText substitui tudo que está lá
    const texto = document.createTextNode("Hello World!")
    titulo.append(texto) // Append adiciona mais um conteúdo ao que já consta
    titulo.innerText += "Hello!"

    // criando uma função para ser executada no click do botão
    const clickDoBotao = () => {
        // obtém o primeiro input que está na tela
        const input = (document.getElementsByTagName("input"))[0]

        const textDigitado = input.value
        let deveCriarUmNovo = false
        
        // obtém uma lista de imagens na tela
        const ps = document.getElementsByTagName("p")

        if(textDigitado.endsWith("\\n") || ps.length == 0){
            deveCriarUmNovo = true
        }
        
        // verifica se existe uma imagem se não existir cria uma nova
        const p = ps.length > 0 && !deveCriarUmNovo ? ps[0] : document.createElement("p")
        p.innerText += input.value

        // insere a imagem na tela
        const container = document.getElementById("container")
        if(deveCriarUmNovo){
            container.append(p)
        }
        
    }

    // criando um novo botão
    const botao = document.createElement("button")
    botao.innerText = "Um botão" // add texto dentro do botão
    botao.classList.add("btn") // add classe no botão
    botao.classList.add("btn-success")
    botao.style.marginLeft = "20px" // add inline style no botão
    botao.addEventListener("click", clickDoBotao) // add um evento no click

    // cria o input na tela
    const input = document.createElement("input")
    input.classList.add("form-control")
    input.style.margin = "20px"
    // add um evento keydown para executar a função quando o enter for pressionado
    input.addEventListener("keydown", (event) => {
        
        if(event.keyCode === 13){ // verifica se a tecla pressionada é enter
            clickDoBotao()
        }
    })

    // insere os elementos criados em tela
    const container = document.getElementById("container")
    container.classList.add("container")
    container.append(botao)
    container.append(input)
}

const addImagem = () => {
    // adicionando texto a um elemento
    const titulo = document.getElementById("titulo")
    titulo.innerText = "Hello World!" // InnerText substitui tudo que está lá
    const texto = document.createTextNode("Hello World!")
    titulo.append(texto) // Append adiciona mais um conteúdo ao que já consta
    titulo.innerText += "Hello!"

    // criando uma função para ser executada no click do botão
    const clickDoBotao = () => {
        // obtém o primeiro input que está na tela
        const input = (document.getElementsByTagName("input"))[0]
        
        // obtém uma lista de imagens na tela
        const imagens = document.getElementsByTagName("img")
        
        // verifica se existe uma imagem se não existir cria uma nova
        const imagem = imagens.length > 0 ? imagens[0] : document.createElement("img")
        imagem.src = input.value
        imagem.setAttribute("alt", "Imagem não encontrada.")

        imagem.classList.add("img-fluid")

        // insere a imagem na tela
        const container = document.getElementById("container")
        container.append(imagem)
        
    }

    // criando um novo botão
    const botao = document.createElement("button")
    botao.innerText = "Um botão" // add texto dentro do botão
    botao.classList.add("btn") // add classe no botão
    botao.classList.add("btn-success")
    botao.style.marginLeft = "20px" // add inline style no botão
    botao.addEventListener("click", clickDoBotao) // add um evento no click

    // cria o input na tela
    const input = document.createElement("input")
    input.classList.add("form-control")
    input.style.margin = "20px"
    // add um evento keydown para executar a função quando o enter for pressionado
    input.addEventListener("keydown", (event) => {
        
        if(event.keyCode === 13){ // verifica se a tecla pressionada é enter
            clickDoBotao()
        }
    })

    // insere os elementos criados em tela
    const container = document.getElementById("container")
    container.classList.add("container")
    container.append(botao)
    container.append(input)
}