/* Importar mongoose */
const mongoose = require('mongoose');

/* Conectarse a la bbdd */
mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/tienda')
    .then(db => console.log('Conectado a la base de datos'))
    .catch(err => console.error(err));