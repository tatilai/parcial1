const mongose =require ('mongose');

const consejoSchema =new mongose.Schema({
    texto : String,
    autor :String,
    fecha :{type:Date, default : Date.now}
});

module.exportes = mongose.model('Consejo',consejoSchema);