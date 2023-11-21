const mongoose = require('mongoose');

const { Schema } = mongoose;

// Creacion de esquema
const userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  status: {
    type: String,
    Enum: ['active', 'inactive'],
    require: true,
    default: 'active',
  },
  rol: {
    type: String,
    Enum: ['admin', 'user'],
    require: true,
    default: 'user',
  },
});

//creacion del modelo

const User = mongoose.model('User', userSchema);

module.exports = User;
