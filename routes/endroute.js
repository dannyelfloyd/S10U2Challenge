//📄 endroute.js: Módulo de ruta para la página final.
const express = require("express");
const router = express.Router();

//Llegaremos a la ruta /endroute 
// y el endroute.js tendrá el siguiente contenido: 
    // Un texto dando la bienvenida 
    // y la ruta donde estamos
router.get('',(req, res) => {
    // Send the response body
    res.send(`
        texto dando la bienvenida
        ruta donde estamos ${req.url}
    `)
});
module.exports = router;