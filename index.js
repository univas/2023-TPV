function calcula(numero1, numero2, funcao){
    return funcao(numero1, numero2)
}

const nome = "Marcos"
const sobrenome = "Antonio"

const nomeCompleto = nome + " " + sobrenome
const curso = "Sistemas de Informação"
const cabecalho = "<h1>"+curso+"</h1><p><strong>Nome</strong>" + nomeCompleto + "</p>"

const cabecalhoInterpolado = `<h1>${curso}</h1><p><strong>${nomeCompleto}</strong></p>`
// console.log(cabecalhoInterpolado)

const listaDeAlunos = []

listaDeAlunos.push("Marcos")

const alunosNovos = [
    "João", "Carlos", "Daniel"
]

const [aluno1, aluno2, aluno3] = alunosNovos

// for(let i = 0; i < alunosNovos.length; i++){
//     listaDeAlunos.push(alunosNovos[i])
// }

// alunosNovos.forEach(aluno => {
//     listaDeAlunos.push(aluno)
// })

listaDeAlunos.push(...alunosNovos)

const aluno = {
    nome: "Marcos",
    idade: 27
}

const dadosComplementares = {
    nascimento: '05/01/1996'
}

const novoAluno ={
    ...aluno, ...dadosComplementares
}

Object.keys(novoAluno).forEach(key => {
    console.log(`${key} => ${novoAluno[key]}`)
})

// console.log(novoAluno)