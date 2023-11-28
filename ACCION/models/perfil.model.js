const PerfilSchema = {
  fecha_nacim: {
    type: Date,
  },
  sexo: {
    type: String,
  },
  biografia: {
    type: String,
    default: null,
  },
  telefono: {
    type: String,
    default: null,
  },
  idUsuario: {
    type: INT,
    required: true,
    unique: true,
  },
};

module.exports = PerfilSchema;
