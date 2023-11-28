const db = require("../../CONEXION/db");

class AmistadesController {
  async enviarSolicitudAmistad(req, res) {
    const { idperfil1, idperfil2 } = req.body;

    try {
      // Verificar si ya existe una solicitud pendiente o una amistad aceptada entre los perfiles
      const existingAmistad = await db.query(
        "SELECT * FROM Amistades WHERE (idperfil1 = ? AND idperfil2 = ?) OR (idperfil1 = ? AND idperfil2 = ?)",
        [idperfil1, idperfil2, idperfil2, idperfil1]
      );

      if (existingAmistad[0].length > 0) {
        return res.status(400).json({ error: "Ya existe una solicitud o amistad entre los perfiles" });
      }

      // Crear nueva solicitud de amistad
      const result = await db.query("INSERT INTO Amistades SET ?", { idperfil1, idperfil2 });

      res.json({ idAmistad: result[0].insertId, idperfil1, idperfil2, estado: 'pendiente' });
    } catch (error) {
      console.error("Error al enviar solicitud de amistad:", error);
      return res.status(500).json({ error: "Error al enviar solicitud de amistad" });
    }
  }

  async gestionarSolicitudAmistad(req, res) {
    const { idAmistad, estado } = req.body;

    try {
      // Obtener información de la solicitud de amistad
      const amistad = await db.query("SELECT * FROM Amistades WHERE idAmistad = ?", [idAmistad]);

      if (amistad[0].length === 0) {
        return res.status(404).json({ error: "Solicitud de amistad no encontrada" });
      }

      // Actualizar el estado de la solicitud de amistad según la acción
      const nuevoEstado = estado === 'aceptar' ? 'aceptada' : 'rechazada';
      const result = await db.query("UPDATE Amistades SET estado = ? WHERE idAmistad = ?", [nuevoEstado, idAmistad]);

      if (result[0].affectedRows === 0) {
        return res.status(404).json({ error: "No se pudo gestionar la solicitud de amistad" });
      }

      res.json({ idAmistad, idperfil1: amistad[0][0].idperfil1, idperfil2: amistad[0][0].idperfil2, estado: nuevoEstado });
    } catch (error) {
      console.error("Error al gestionar solicitud de amistad:", error);
      return res.status(500).json({ error: "Error al gestionar solicitud de amistad" });
    }
  }
}

module.exports = new AmistadesController();
