const db = require("../config/database");

const CategoryController = {
    categoria_has_producto(req,res){
        let sql = 'CREATE TABLE expressdb.categoria_has_productos ( id INT AUTO_INCREMENT, id_categoria INT, id_producto INT, PRIMARY KEY(id), FOREIGN KEY(id_producto) REFERENCES productos(idProducto), FOREIGN KEY(id_categoria) REFERENCES categorias(idCategoria))'
        db.query(sql,(err,result)=>{
          if(err) throw err;
          console.log(result);
          res.send("Categoria_has_productos ha sido creada...");
        })
    },
    productoCategoria (req,res){
        let post = {id_producto: req.body.id_producto, id_categoria: req.body.id_categoria}
        let sql = 'INSERT INTO expressdb.categoria_has_productos SET ?'
        db.query(sql,post,(err,result)=>{
          if(err) throw err
          console.log(result)
          res.send("Cositas posteadas...");
        })
    },
    selectCategoria (req,res){
        let sql =`SELECT * FROM expressdb.categorias WHERE idCategoria = ${req.params.id}`;
        db.query(sql,(err,result)=>{
          if(err) throw err
          console.log(result)
          res.send(`Categoria con id ${req.params.id} seleccionado`);
        })
    },
    selectAllCategoria (req, res){
        let sql = "SELECT * FROM expressdb.categorias";
        db.query(sql,(err,result)=>{
          if(err) throw err
          console.log(result);
          res.send("Listado de categorias...");
        })
    },
    crearCategoria (req,res){
        let sql='CREATE TABLE categorias(idCategoria int AUTO_INCREMENT, tituloCategoria VARCHAR(255), PRIMARY KEY(idCategoria))'
        db.query(sql,(err,result)=>{
          if(err) throw err;
          console.log(result);
          console.log("Tabla de categorías creada...");
        })
    },
    insertarCategoria (req,res){
        let post = {tituloCategoria: req.body.tituloCategoria};
        let sql = 'INSERT INTO categorias SET ?'
        db.query(sql,post,(err,result)=>{
          if(err) throw err;
          console.log(result);
          res.send("Categoría insertada en la BD...");
        })
    },
    deleteCategoriaProducto (req,res){
        let sql = `DELETE FROM expressdb.categoria_has_productos WHERE id_producto = ${req.params.id}`;
        db.query(sql, (err,result)=>{
          if (err) throw err
          console.log(result)
          res.send("Producto de categoria_has_producto borrado...");
        })
    }
}
module.exports = CategoryController;