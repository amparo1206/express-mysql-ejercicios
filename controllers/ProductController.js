const db = require("../config/database.js");

const productController = {
    createProducts(req,res){
        let sql ='CREATE TABLE productos(idProducto int AUTO_INCREMENT, tituloProducto VARCHAR(255), precio VARCHAR(255), PRIMARY KEY(idProducto))'
        db.query(sql,(err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send("Tabla de productos creada...");
        })
    },
    selectProducto(req, res){
        let sql =`SELECT * FROM expressdb.productos WHERE idProducto = ${req.params.id}`;
        db.query(sql,(err,result)=>{
          if(err) throw err
          console.log(result)
          res.send(`Producto con id ${req.params.id} seleccionado`);
        })
    },
    productoTitulo(req,res){
        let sql =`SELECT * FROM expressdb.productos WHERE tituloProducto ="${req.params.tituloProducto}"`;
        db.query(sql,(err,result)=>{
          if(err) throw err
          console.log(result)
          res.send(`Producto con titulo ${req.params.tituloProducto} seleccionado`);
        })
    },
    productoSelectListado(req,res){
        let sql = `SELECT * FROM expressdb.productos`;
        db.query(sql,(err,result)=>{
          if(err) throw err
          console.log(result)
          res.send("Lista de productos seleccionados")
        })
    },
    getAllProducts(req,res){
        let sql = "SELECT * FROM expressdb.productos";
        db.query(sql,(err, result)=>{
          if(err) throw err
          console.log(result)
          res.send("Listado de productos...");
        })
    },
    productoInsertadoDB(req,res){
        let post = { tituloProducto: req.body.tituloProducto, precio: req.body.precio}
        let sql = 'INSERT INTO expressdb.productos SET ?'
        db.query(sql,post,(err,result)=>{
          if(err) throw err;
          console.log(result);
          res.send("Producto insertado en la BD...");
        })
    },
    productoBorrado(req,res){
        let sql = `DELETE FROM expressdb.productos WHERE idProducto = ${req.params.id}`;
        db.query(sql, (err,result)=>{
          if (err) throw err
          console.log(result)
          res.send("Producto borrado...");
        })
    },
    updateProducto(req,res){
        let newTitleProd = req.body.tituloProducto;
        let newPrecioProd = req.body.precio;
        let sql = `UPDATE productos SET tituloProducto = "${newTitleProd}", precio = "${newPrecioProd}" WHERE idProducto = ${req.params.id}`;
        db.query(sql,(err, result)=>{
           if(err) throw err;
           console.log(result);
           res.send("Producto actualizado...");
        })
    }
}

module.exports = productController;
