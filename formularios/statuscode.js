const axios = require("axios")

axios.delete("http://localhost:3000/enderecos/1")
.then(res => console.log(res.data))
.catch((err) => {
    const status_code = err.response ? err.response.status : 0

    if(status_code == 404){
        console.log("Este endereço não existe")
    }else{
        console.log("Não consegui resolver.")
    }
})