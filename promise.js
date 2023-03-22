
var valor_total = 10
var i = 1


// var intervalid = setInterval(function(){
//     console.log(i++)
//     if(i>valor_total)
//     clearInterval(intervalid)
    
// },1000)
const promises = []
console.log("Começou")
for(let i = 1; i <= 10; i++){
    const promise = executa(i, i*1000)
        .then((val) => console.log(val))

    promises.push(promise)
}

Promise.all(promises).then(() => {
    console.log("Terminou")
})


function executa(num, timeout){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num)
        }, timeout)
    })
}