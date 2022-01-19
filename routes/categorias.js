const express = require("express");
const { categoria_has_producto } = require("../controllers/categoryController");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

router.get('/categoria_has_productos', categoryController.categoria_has_producto);
router.post('/postProductoCategoria', categoryController.productoCategoria);
router.get('/SeleccionaCategoria/:id', categoryController.selectCategoria);
router.get('/getAllCategorias', categoryController.selectAllCategoria);
router.get('/createCategorias', categoryController.crearCategoria);
router.post('/postCategoria', categoryController.insertarCategoria);
router.delete('/deleteFromCategoriaProducto/:id', categoryController.deleteCategoriaProducto);




module.exports = router;