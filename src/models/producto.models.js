/* Importar Schema y model de mongoose */
const { Schema, model } = require('mongoose');

/* Crear nuevo esquema */
const ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    marca: {type: String, required: true},
    precio: {type: Number, required: true},
    categoria: {type: String, required: true},
    stock: {type: Number, required: true}
}, {
    timestamps: true,
    versionKey: false
});

/* Exportar */
module.exports = model('Producto', ProductoSchema);