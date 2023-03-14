function main(){
    let tarefa = "tarefa 04"
    const promessa01 = printValor(tarefa)

    promessa01
    .then((novoValor) => {
        console.log(novoValor)
    }).catch((err) => {
        console.error(err)
    })

    tarefa = "tarefa 02"
    printValor(tarefa, 3000).then((novoValor) => {
        console.log(novoValor)
        tarefa = "tarefa 03"
        printValor(tarefa, 1000).then((novoValor) => {
            console.log(novoValor)
            tarefa = "tarefa 05"
            printValor(tarefa).then((novoValor) => {
                console.log(novoValor)
            })
        })
    }).catch((err) => {
        console.log(err)
    })

    
}

function printValor(novoValor, timeout = 0){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(novoValor == "tarefa 04"){
                reject("Tarefa não disponível")
            }else{
                resolve(novoValor)
            }
        }, timeout)
    })
}



main()