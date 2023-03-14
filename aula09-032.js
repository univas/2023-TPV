const p = document.getElementById("paragrafo")
const button = document.getElementById("botao")

const container = document.getElementById("canvas")
const contexto = container.getContext('2d')

contexto.fillStyle = 'rgba(0,0,255,0.2)'
contexto.beginPath()

function degToRad(degree){
    return degree * (Math.PI / 180)
}

contexto.arc(10, 20, 10, degToRad(0), degToRad(360), false)
contexto.fill()

button.onclick = function(){
    p.innerText = "Aguarde enquanto estamos processando."
    executa(100000)
    .then(() => {
        p.innerText = "Execução finalizada. Pode continuar suas atividades."
    }).catch((err) => {
        p.innerText = err
    })
    
}

function executa(quantidade){
    return new Promise((resolve, reject) => {
        if(quantidade > 100000){
            reject("Número muito grande. Vai travar seu computador.")
        }else{
            for(let i=0; i<quantidade; i++){
                const date = new Date()
                console.log(date)
            }

            resolve()
        }
    })
    
    
}