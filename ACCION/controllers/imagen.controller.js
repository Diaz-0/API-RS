const db = require('../../CONEXION/db'); // Reemplaza con tu lógica de conexión a la base de datos


class ImagenController {
    async subirImagen(req, res) {
      try {
        const { ruta, idPublicacion } = req.body;
  
        // Puedes validar la existencia de la publicación o realizar otras validaciones según tus necesidades
  
        const query = "INSERT INTO imagen (ruta, idPublicacion) VALUES (?, ?)";
        const result = await db.query(query, [ruta, idPublicacion]);
  
        res.json({ idImagen: result[0].insertId, ruta, idPublicacion });
      } catch (error) {
        console.error("Error al subir la imagen:", error);
        return res.status(500).json({ error: "Error al subir la imagen" });
      }
    }
  }
  
module.exports = new ImagenController();