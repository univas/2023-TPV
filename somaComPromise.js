function soma(num1, num2){
    return new Promise(function(resolve, reject){
        const tempo = Math.floor(Math.random() * 10)
        console.log(`Aguardando ${tempo} segundos para executar.`)

        setTimeout(function(){
            const soma = num1+num2
            
            if(soma%2 == 0){
                resolve(soma)
            }else{
                reject(soma)
            }
        }, tempo * 1000)
    })
}

const numero1 = 100
const numero2 = 200

soma(numero1, numero2)
    .then(function(resultado){
        console.log("THEN: " + resultado)
    })
    .catch(function(resultado){
        console.log("CATCH: " + resultado)
    })