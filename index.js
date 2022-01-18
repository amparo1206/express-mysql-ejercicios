const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(express.json())

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2752arm.',
    database:'expressDB'
});
  
  db.connect();

app.get('/createdb',(req,res)=>{
    let sql ='CREATE DATABASE expressDB';
    db.query(sql,(err,result)=>{
      if(err)throw err;
      console.log(result);
      res.send('Database created...')
    })
  }) 

app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
      db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...')
      })
  })
app.get('/categoria_has_productos',(req,res)=>{
  let sql = 'CREATE TABLE expressdb.categoria_has_productos ( id INT AUTO_INCREMENT, id_categoria INT, id_producto INT, PRIMARY KEY(id), FOREIGN KEY(id_producto) REFERENCES productos(idProducto), FOREIGN KEY(id_categoria) REFERENCES categorias(idCategoria))'
  db.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send("Categoria_has_productos ha sido creada...");
  })
})

app.get('/createdproduct', (req, res) => {
    let sql = 'CREATED TABLE product(id int AUTO_INCREMENT, tittle VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Product table created...')
    })
})

app.get('/createdcategory', (req, res) => {
    let sql = 'CREATED TABLE category(id int AUTO_INCREMENT, tittle VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Category tabled created..')
    })
})

app.post('/', (req, res)=> {
    let post = { tittle: 'post 1', body: 'this post is the number one' };
    let sql = 'INSERT INTO post SET ?'
    db.querry(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post added...')
    })
})




app.listen(4000,()=>{
    console.log('servidor levantado en el puerto 4000')
})
