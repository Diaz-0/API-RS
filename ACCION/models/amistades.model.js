const AmistadesSchema = {
    idperfil1: {
      type: INT,
      required: true,
    },
    idperfil2: {
      type: INT,
      required: true,
    },
    estado: {
      type: ENUM('pendiente', 'aceptada', 'rechazada'),
      default: 'pendiente',
    },
};

module.exports = AmistadesSchema;