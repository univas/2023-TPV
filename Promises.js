const palavra = "abacaxi"

function executarAlgo(palavra){
    return new Promise(function(resolve, reject) {
        
        const intervalId = setInterval(function(){
            console.log("0.5 segundo")
        }, 500)

        setTimeout(function(){
            clearInterval(intervalId)
            if(palavra != "abacaxi"){
                resolve(palavra.toUpperCase())
            }else{
                reject(palavra)
            }
        }, 3000)
    })
}

executarAlgo(palavra)
    .then(function(palavraEmCaixaAlta){
        console.log(palavraEmCaixaAlta)
    }).catch(function(parametros){
        console.log("erro " + parametros)
    })


