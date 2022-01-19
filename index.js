const express = require('express');
const app = express();

app.use(express.json())  

app.use('/posts', require('./routes/categorias'));
app.use('/posts', require('./routes/products'));

router.listen(4000,()=>{
    console.log('servidor levantado en el puerto 4000')
})
