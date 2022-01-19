const express = require('express');
const app = express();

app.use(express.json())  

app.use('/categorias', require('./routes/categorias'));
app.use('/products', require('./routes/products'));
app.use('/databaseController', require('./routes/database'));

router.listen(4000,()=>{
    console.log('servidor levantado en el puerto 4000')
})
