const pessoa = {
    nome: "Marcos"
}

const dadosComplementares = {
    idade: 27
}

const pessoaCompleta = {
    ...pessoa, ...dadosComplementares
}

console.log(pessoaCompleta)