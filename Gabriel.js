function randomNumber(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number)
        }, 1000 * number)
    })
}

let number = 10
console.log("Começou")
for(let i=1; i<=number; i++){
    randomNumber(i).then((valor) => {
        console.log(valor)
    })
}
randomNumber(number+1).then((valor) => {
    console.log("Terminou")
})