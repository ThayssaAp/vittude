const express = require("express");
const app = express();
const port = process.env.PORT || 3010
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.post("/login", (req, res) => {
    const { email, password } = req.body

    if(email === "admin@admin.com" && password === "admin"){
        return res.status(200).json({message: "Login efetuado com sucesso!"})
    } 
    return res.status(200).json({error: "E-mail ou senha incorreto!"})
})

app.listen(port, () => {
    console.log("Server is runner")
});