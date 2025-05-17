/*import mongoose from 'mongoose';

const puntoInteresSchema = new mongoose.Schema({
  tipo: {
    type: String,
    enum: ['farmacia', 'parada_colectivo', 'iluminacion']
  },
  nombre: String,
  ubicacion: {
    direccion: String,
    lat: Number,
    lng: Number
  }
});

const PuntoInteres = mongoose.model('PuntoInteres', puntoInteresSchema);
export default PuntoInteres;*/


import mongoose from 'mongoose';

const puntoInteresSchema = new mongoose.Schema({
  tipo: String,
  nombre: String,
  ubicacion: {
    direccion: String,
    lat: Number,
    lng: Number
  },
  seguridad: mongoose.Schema.Types.Mixed,
  activo: Boolean
}, { strict: false});

const PuntoInteres = mongoose.model('PuntoInteres', puntoInteresSchema);
export default PuntoInteres;