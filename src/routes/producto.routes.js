/* Importar objeto router */
const { Router } = require('express');
/* Importar controlador */
const ProductoController = require('../controllers/producto.controllers');

/* Instanciar objeto router  */
const router = Router();

/* CREAR RUTAS */
router.get('/productos', ProductoController.getProductos);
router.get('/producto/:id', ProductoController.getProducto);
router.post('/crear-producto/', ProductoController.createProducto);
router.put('/actualizar-producto/:id', ProductoController.updateProducto);
router.delete('/eliminar-producto/:id', ProductoController.deleteProducto);


module.exports = router;