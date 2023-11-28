const db = require("../../CONEXION/db");

class NotificacionController {
  async crearNotificacion(req, res) {
    const { idperfil, tipo, idReferencia } = req.body;

    try {
      const result = await db.query("INSERT INTO Notificacion SET ?", { idperfil, tipo, idReferencia });

      res.json({
        id_Notificacion: result[0].insertId,
        fecha_creacion: new Date(),
        leido: 1,
        idperfil,
        tipo,
        idReferencia,
      });
    } catch (error) {
      console.error("Error al crear notificación:", error);
      return res.status(500).json({ error: "Error al crear notificación" });
    }
  }

  async obtenerNotificaciones(req, res) {
    const { idperfil } = req.params;

    try {
      const notificaciones = await db.query("SELECT * FROM Notificacion WHERE idperfil = ?", [idperfil]);

      res.json(notificaciones[0]);
    } catch (error) {
      console.error("Error al obtener notificaciones:", error);
      return res.status(500).json({ error: "Error al obtener notificaciones" });
    }
  }

  async marcarComoLeida(req, res) {
    const { id_Notificacion } = req.params;

    try {
      await db.query("UPDATE Notificacion SET leido = 0 WHERE id_Notificacion = ?", [id_Notificacion]);

      res.json({ mensaje: "Notificación marcada como leída" });
    } catch (error) {
      console.error("Error al marcar notificación como leída:", error);
      return res.status(500).json({ error: "Error al marcar notificación como leída" });
    }
  }
}

module.exports = new NotificacionController();