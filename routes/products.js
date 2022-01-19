const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get('/', postController.create);
router.get('/', postController.createDB)

router.get('/createProductos', ProductController.createProducts);
router.get('/SeleccionaProducto/:id', ProductController.selectProducto);
router.get('/SeleccionaProductoName/:tituloProducto', ProductController.productoTitulo);
router.get('/SelectAllProductos', ProductController.productoSelectListado);
router.get('/getAllProductos', ProductController.getAllProducts);
router.post('/postProducto', ProductController.productoInsertadoDB);
router.delete('/deleteProducto/:id', ProductController.productoBorrado);
router.put('/updateProducto/:id', ProductController.updateProducto);




module.exports = router;