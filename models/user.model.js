import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  ubicacion: String,
  telefono: String,
  fecha_nacimiento: Date,
  rol: {
    type: String,
    enum: ['ciudadano', 'admin'],
    default: 'ciudadano'
  }
});

const User = mongoose.model('User', userSchema);
export default User;