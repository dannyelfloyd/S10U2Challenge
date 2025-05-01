const express = require("express");
const router = express.Router();
const validarHora = require('../middlewares/validarHora.js');

router.get('/', validarHora, (req, res) => {
    res.send(`
        texto dando la bienvenida
        ruta donde estamos ${req.url}
    `)
});
module.exports = router;