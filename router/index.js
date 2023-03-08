// Importar el módulo body-parser y el framework Express
const bodyParser = require("body-parser");
const express = require("express");

// Crear una instancia de Router
const router = express.Router();

// Ruta principal que muestra una página con los datos del array "datos"
router.get("/", (req, res) => {
  res.render("index.html", {
    Header: "Sistemas Microinformatica",
    subHeader: "Recursos Humanos",
    Footer: "Compañia de luz @Derechos Reservados 2023 Bryan Gonzalez",
  });
});

// Exportar el módulo Router para que pueda ser utilizado en otros archivos
module.exports = router;