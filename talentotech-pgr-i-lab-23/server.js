const express = require("express");
const cors = require("cors");

const app = express();

const options = {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(express.json())
app.use(cors(options))

app.get("/", (request, response) => {
    return response.send("Ha realizado una peticion al servidor correctamente")
})


app.get("/users", (requeset, response) => {
    try {
        const users = [{
            Nombres: "Juan",
            Apellidos: "Perez",
            Correo: "juan.perez@correo.com",
            Edad: 20,
            Genero: "Masculino"
        }, {
            Nombres: "Camila",
            Apellidos: "Perez",
            Correo: "camila.perez@correo.com",
            Edad: 25,
            Genero: "Femenino"
        }, {
            Nombres: "Santiago",
            Apellidos: "Arias",
            Correo: "santiago.arias@correo.com",
            Edad: 19,
            Genero: "Masculino"
        }]        

        return response.status(200).json(users)
    } 
    catch (err) {
        return response.status(500).json({ Error: "Ocurrio un error en el servidor"})
    }
})

module.exports = app;
