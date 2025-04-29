//📄 horaMiddleware.js: Middleware para obtener la hora actual.
//horaMiddleware.js: De aquí sacaremos la hora. 
// Recuerda que hay que pasarla como una req 
// y con js podemos obtener la fecha con new Date()
const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hh = now.getHours;
    const mm = now.getMinutes;
    const ss = now.getSeconds;
  
    const formateTime = `${hh}:${mm}:${ss}`;
  
    console.log(formateTime);
    req.dateType = formateTime;
  
    next();
  };
  
  module.exports = horaMiddleware;