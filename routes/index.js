//📄 index.js: Módulo de ruta para la página principal.
const express = require("express");
const router = express.Router();

//En esta ruta habrá lo siguiente:
router.get('',(req, res) => {
    //Un texto de bienvenida y la hora actual
    //Un botón que enlace /endroute
    res.send(`
        texto de bienvenida
        hora actual: ${req.dateType}
        boton de enlace /endroute <a href="/endroute">endroute</a>
    `);
  });
    //Al clickar tendrá que validar con el middleware validarHora.jssi la hora es correcta para poder continuar. Solo se podrá acceder a /endroute si la hora es está entre las 12h de la mañana y las 24h.
    //Si es antes de las 12 al clickar en el botón nos saldrá un mensaje que diga algo como "Aún no son las 12 de la mañana"
        //res.locals.mensaje = Aún no es la hora, espera hasta las 14:00 para entrar; return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    //Si accedemos directamente a la ruta /endroute, nos devolverá el mismo error y misma ruta que si pulsaramos el botón

module.exports = router;