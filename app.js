const express = require('express'); //import the express module
const app = express(); //create an Express application
const PORT = 3000; // port defined

const horaMiddleware = require('./middlewares/horaMiddleware.js');
app.use(horaMiddleware);

// Import Routes
const indexRouter = require('./routes/index.js');
const endrouteRouter = require('./routes/endroute.js');
const validarHora = require('./middlewares/validarHora.js');

// Routes:
app.use('/', indexRouter)
app.use('/endroute', validarHora, endrouteRouter);

// Errors
app.use((req, res) => {
    res.status(404).send('Pagina no encontrada');
});
// Iniciar el servidor
app.listen(PORT, () => console.log(`Servidor ejecutándose en http://localhost:${PORT}`));