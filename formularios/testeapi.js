const axios = require("axios")

axios.get("http://localhost:3000/pessoas?nome=Igor")
.then((res) => {
    // console.log(res.data)
})

const pessoa = {
    nome: "Francisco",
    profissao: "Aluno",
    idade: 5,
    cpf: "123.456.789-13"
}

axios.post("http://localhost:3000/pessoas",pessoa)
    .then((res) => console.log(res.data))

axios.post("http://localhost:3000/enderecos", {
    rua: "Tuany Toledo",
    numero: 470,
    bairro: "Fatima",
    cidade: "Pouso Alegre",
    estado: "MG",
    cep: "37554-210"
}).then(res => console.log(res.data))

axios.put("http://localhost:3000/pessoas/4", {
    nome: 'Francisco Rafael Sobrenome',
    profissao: 'Aluno',
    idade: 5,
    cpf: '123.456.789-13',
    id: 4
}).then(res => console.log(res.data))

axios.delete("http://localhost:3000/enderecos/1")
.then(res => console.log(res.data))