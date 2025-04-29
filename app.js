//📄 app.js: Contiene el código principal de la aplicación con la configuración de Express, middleware y rutas.
const express = require('express'); //import the express module
const app = express(); //create an Express application
const PORT = 3000;

const horaMiddleware = require('./middlewares/horaMiddleware');
app.use(horaMiddleware);
// Que no se te olvide express.Router() para generar las rutas

// Recuerda que la ruta la estamos trabajando desde app.js. 
// Dentro de cada ruta debe empezar su ruta '/', 
// si repitieramos dentro el resultado podría ser algo similar 
// a esto como URL: /endroute/endroute. Presta mucha atención a las rutas y las URLs.
//La primera ruta que debe salir nada más inicializar el servidor será index.js
    // app.use('/', indexRouter)
const indexRouter = require('./routes/index');
app.use('/', indexRouter)


// app.use('/endroute', endrouteRouter);
const endrouteRouter = require('./routes/endroute');
app.use(endrouteRouter);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
});