const express =require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser())

app.get("/", (req, res) => {
    res.send("Chegou")
})

app.post("/login", (req, res) => {
    res.send(req.body)
})

app.listen(3000, () => console.log("executando"))