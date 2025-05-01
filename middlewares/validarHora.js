const hora = 10;
module.exports = (req, res, next) => {
    if (req.hh < hora) {
        res.locals.mensaje = `Aún no es la hora, espera hasta las 14:00 para entrar`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
    next();
};