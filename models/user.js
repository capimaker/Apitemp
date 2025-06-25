const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Por favor, introduce un nombre de usuario'],
    },
    last_name: {
      type: String,
      required: [true, 'Por favor, introduce un apellido de usuario'],
    },
    email: {
      type: String,
      match: [/^.*@.*\..*/, 'Este correo no es válido'],
      required: [true, 'Por favor, rellena tu email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Por favor, introduce una contraseña'],
    },
    image: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      default: 'user',
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    adress: {
      type: String,

    },
    tokens: [],
    tokens: {
     type: [String],
    default: []
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
