const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/viasegura',{
    userNewUrlParser:true,
    userUnifiedTopology: true,
})
.then(()=>console.log('Conectado a MongoDB'))
.catch(err=> console.error('Error al conectar al MongoDB:',err));