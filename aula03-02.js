const pessoa = {
    nome: "Marcos",
    sobrenome: "Antonio dos Santos",
    "idade": 27,
    nomeCompleto: function(){
        // return this.nome + " " + this.sobrenome
        return `${this.nome} ${this.sobrenome}`
    },
    endereco: {
        logradouro: "Tuany Toledo"
    }
}

const pessoa2 = {
    nome: "Pedro",
    sobrenome: "Henrique",
    "idade": 30,
    nomeCompleto: function(){
        // return this.nome + " " + this.sobrenome
        return `${this.nome} ${this.sobrenome}`
    },
    endereco: {
        logradouro: "Tuany Toledo"
    },
    aluno: true
}

const pessoa3 = {
    nome: "Marcelo",
    sobrenome: "Almeida",
    "idade": 18,
    nomeCompleto: function(){
        // return this.nome + " " + this.sobrenome
        return `${this.nome} ${this.sobrenome}`
    },
    endereco: {
        logradouro: "Tuany Toledo"
    },
    aluno: false
}

pessoa.nome = "José"
pessoa.aluno = true
pessoa.endereco.numero = 470

console.log(pessoa)







const pessoas = [pessoa, pessoa2]
pessoas.push(pessoa3)

const idades = pessoas.map(function(p){
    const {idade, aluno} = p
    return idade
})

console.log(idades)


// let somatorio = 0

const soma = idades.reduce((anterior, atual, index) => {
    return anterior + atual
}, 0)

console.log(soma)


const o1 = {nome: "Marcos"}
const o2 = {nome: "João", idade: 30}
const o3 = {idade: 40, email: "oi@fuvs.br"}

const objetos = [o1, o2, o3]

const reduzido = objetos.reduce((anterior, atual, index) => {
    return {
        ...anterior, ...atual
    }
}, {})
console.log(reduzido)


const alunos = 
pessoas.filter(p => p.aluno === true)



console.log(alunos)




const somatorioDeAlunos = alunos
    .map(p => p.idade)
    .reduce((anterior, atual) => anterior + atual, 0)

const o= {
    metodo1: (p1, p2) => {},
    metodo1: (p1) => {}
}

console.log(somatorioDeAlunos)