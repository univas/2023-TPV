const numero = 10

function contar(numero){
    let cont = 0

    return new Promise((resolve, reject) => {
        console.log("começar")

        const intervalid = setInterval(function(){
            console.log(++cont)
            if(cont == numero){
                clearInterval(intervalid)
                resolve("Terminou")
            }
        }, 1000)
    })
}

contar(numero).then(function(msg){
    console.log(msg)
})