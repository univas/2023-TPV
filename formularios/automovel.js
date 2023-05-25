const axios = require("axios")

// GET
axios.get("http://localhost:3000/automovel")
    .then((res) => {
        console.log("Listando todos os automoveis: "+JSON.stringify(res.data))
    })

axios.get("http://localhost:3000/automovel/1")
    .then((res) => {
        console.log("Buscando um automovel: "+JSON.stringify(res.data))
    })
// POST
// axios.post("http://localhost:3000/automovel", {
//     "modelo": "Uno",
//     "ano": 2013
// }).then((res) => {
//     console.log("Automovel criado: "+JSON.stringify(res.data))
// })

// PUT
axios.put("http://localhost:3000/automovel/3", {
    "modelo": "Gol",
    "ano": 2011
})
    .then((res) => {
        console.log("Automovel atualizado: "+JSON.stringify(res.data))
    })

// DELETE
axios.delete("http://localhost:3000/automovel/2")
    .then((res) => {
        console.log("Automovel excluido: "+JSON.stringify(res.data))
    })