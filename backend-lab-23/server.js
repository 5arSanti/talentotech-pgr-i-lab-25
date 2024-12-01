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

app.get("noticias", (request, response) => {
    try {
        const noticias = [{
            titulo: "Descubren nueva especie de dinosaurio",
            descripcion: "Paleontólogos han descubierto una nueva especie de dinosaurio en Argentina.",
            fecha: "2023-10-01"
        }, {
            titulo: "Lanzamiento del nuevo iPhone",
            descripcion: "Apple ha lanzado su nuevo iPhone con características innovadoras.",
            fecha: "2023-10-02"
        }, {
            titulo: "Avances en la cura del cáncer",
            descripcion: "Científicos han hecho avances significativos en la búsqueda de una cura para el cáncer.",
            fecha: "2023-10-03"
        }, {
            titulo: "Cambio climático y sus efectos",
            descripcion: "Expertos advierten sobre los efectos del cambio climático en el planeta.",
            fecha: "2023-10-04"
        }, {
            titulo: "Nuevas medidas contra el COVID-19",
            descripcion: "Gobiernos alrededor del mundo implementan nuevas medidas para combatir el COVID-19.",
            fecha: "2023-10-05"
        }];

        return response.status(200).json(noticias);
    } 
    catch (err) {
        return response.status(500).json({ Error: "Ocurrio un error en el servidor"})
    }
})

module.exports = app;
