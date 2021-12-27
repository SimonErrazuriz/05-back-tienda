/* Crear controlador */
const ProductoController = {}

/* Importar modelo */
const Producto = require('../models/producto.models');

/* Funciones CRUD */

/* Todos los productos */
ProductoController.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}

/* Algún producto */
ProductoController.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}

/* Crear producto */
ProductoController.createProducto = async (req, res) => {
    const newProducto = new Producto(req.body);
    await newProducto.save();
    res.send({ message: 'Producto creado' });
}

/* Actualizar producto */
ProductoController.updateProducto = async (req, res) => {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Producto actualizado'})
}

/* Borrar producto */
ProductoController.deleteProducto = async (req, res) => { 
   await Producto.findByIdAndRemove(req.params.id);
   res.json({status: 'Producto eliminado'});
}

module.exports = ProductoController;