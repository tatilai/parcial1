/*const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/via_segura',{
    userNewUrlParser:true,
    userUnifiedTopology: true,
})
.then(()=>console.log('Conectado a MongoDB'))
.catch(err=> console.error('Error al conectar al MongoDB:',err));
*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/via_segura')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(' Error al conectar al MongoDB:', err));