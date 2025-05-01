const express = require("express");
const router = express.Router(); // Inicializar su herramienta router

router.get('/',(req, res) => {
    const mensaje = req.query.mensaje || ''
    res.send(`
        texto de bienvenida
        hora actual: ${req.time}
        <a href="/endroute"><button>Entrar</button></a>
        <p>${mensaje}</p>
    `);
});
module.exports = router;