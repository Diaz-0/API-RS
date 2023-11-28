const db = require('../../CONEXION/db');

class PublicacionController {
  async createPublicacion(req, res) {
    const { titulo, contenido, idperfil, imagenes } = req.body;

    try {
      // Insertar la nueva publicación
      const result = await db.query(
        'INSERT INTO publicacion (titulo, contenido, idperfil) VALUES (?, ?, ?)',
        [titulo, contenido, idperfil]
      );

      // Obtener el ID de la última publicación insertada
      const idPublicacion = result[0].insertId;

      // Insertar imágenes relacionadas con la publicación
      if (imagenes && imagenes.length > 0) {
        const imagenValues = imagenes.map((ruta) => [ruta, idPublicacion]);
        await db.query(
          'INSERT INTO imagen (ruta, idPublicacion) VALUES ?',
          [imagenValues]
        );
      }

      res.status(201).json({ idPublicacion });
    } catch (error) {
      console.error('Error al crear la publicación:', error);
      res.status(500).json({ error: 'Error al crear la publicación' });
    }
  }
}

module.exports = new PublicacionController();
