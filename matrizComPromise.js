const matriz = []
const promises = []

for(let i = 0; i < 4; i++){
    const promise = addNotas(i, i*1000).then((dados) => {
        console.log(`Aluno ${dados.id}`, dados.notas)
    })

    promises.push(promise)
}

Promise.all(promises).then(() => {
    const medias = matriz.map((item) => {
        const soma = item.reduce((anterior, atual) => {
            return anterior + atual
        }, 0)

        return soma / item.length
    })

    console.log(medias)
})

function addNotas(index, timeout){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const notas = [
                Math.floor(Math.random() * 25),
                Math.floor(Math.random() * 25),
                Math.floor(Math.random() * 25),
                Math.floor(Math.random() * 25)
            ]

            matriz.push(notas)

            resolve({
                id: index, notas
            })
        }, timeout)
    })
}