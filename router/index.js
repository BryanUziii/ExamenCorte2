// Importar el módulo body-parser y el framework Express
const bodyParser = require("body-parser");
const express = require("express");

// Crear una instancia de Router
const router = express.Router();

// Ruta principal que muestra una página con los datos del array "datos"
router.get("/paginaEntrada", (req, res) => {
  const params = {
    NumContrato: req.query.NumContrato,
    Nombre: req.query.Nombre,
    NivelDeEstudios: req.query.NivelDeEstudios,
    PagoDiario: req.query.PagoDiario,
    DiasTrabajados: req.query.DiasTrabajados,
    SubTotal: req.query.SubTotal,
    Total: req.query.Total
};
res.render("paginaEntrada.html", params);
});

// Ruta que recibe los valores enviados a través del formulario de la página "/cotizacion" y muestra los resultados de la cotización
router.post("/paginaEntrada", (req, res) => {
  const params = {
    NumContrato: req.body.NumContrato,
    Nombre: req.body.Nombre,
    NivelDeEstudios: req.body.NivelDeEstudios,
    PagoDiario: req.body.PagoDiario,
    DiasTrabajados: req.body.DiasTrabajados,
    SubTotal: req.body.SubTotal,
    Total: req.body.Total
  };
  res.render("paginaSalida.html", params);
});

// Ruta principal que muestra una página con los datos del array "datos"
router.get("/PaginaSalida", (req, res) => {
  const params = {
    NumContrato: req.query.NumContrato,
    Nombre: req.query.Nombre,
    NivelDeEstudios: req.query.NivelDeEstudios,
    PagoDiario: req.query.PagoDiario,
    DiasTrabajados: req.query.DiasTrabajados,
    SubTotal: req.query.SubTotal,
    Total: req.query.Total

    
};
res.render("PaginaSalida.html", params);
});

// Ruta que recibe los valores enviados a través del formulario de la página "/cotizacion" y muestra los resultados de la cotización
router.post("/paginaSalida", (req, res) => {
  const params = {
    NumContrato: req.body.NumContrato,
    Nombre: req.body.Nombre,
    NivelDeEstudios: req.body.NivelDeEstudios,
    PagoDiario: req.body.PagoDiario,
    DiasTrabajados: req.body.DiasTrabajados,
    SubTotal: req.body.SubTotal,
    Total: req.body.Total
  };
  res.render("paginaSalida.html", params);
});

// Exportar el módulo Router para que pueda ser utilizado en otros archivos
module.exports = router;