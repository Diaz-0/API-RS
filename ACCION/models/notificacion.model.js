const NotificacionSchema = {
  fecha_creacion: {
    type: 'TIMESTAMP',
    default: 'CURRENT_TIMESTAMP',
  },
  leido: {
    type: 'TINYINT',
    default: 1,
  },
  idperfil: {
    type: 'INT',
  },
  tipo: {
    type: 'ENUM',
    values: ['publicacion', 'solicitud_amistad'],
    required: true,
  },
  idReferencia: {
    type: 'INT',
    required: true,
  },
};

module.exports = NotificacionSchema;
