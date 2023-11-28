const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");

const userSRoutes = require("../ACCION/routes/userS.route");
const perfilRoutes = require("../ACCION/routes/perfil.route");
const publicacionRoutes = require("../ACCION/routes/publicacion.route");
const imagenRoutes = require("../ACCION/routes/imagen.route");
const amistadesRoutes = require("../ACCION/routes/amistades.route");
const comentarioRoutes = require("../ACCION/routes/comentario.route");
const mensajeRoutes = require("../ACCION/routes/mensaje.route");
const notificacionRoutes = require("../ACCION/routes/notificacion.route");
const paisRoutes = require("../ACCION/routes/pais.route");
const estadoRoutes = require("../ACCION/routes/estado.route");
const conversacionRoutes = require("../ACCION/routes/conversacion.route");


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(`/api/${API_VERSION}/userS`, userSRoutes);
app.use(`/api/${API_VERSION}/perfil`, perfilRoutes);
app.use(`/api/${API_VERSION}/publicacion`, publicacionRoutes);
app.use(`/api/${API_VERSION}/imagen`, imagenRoutes);
app.use(`/api/${API_VERSION}/amistades`, amistadesRoutes);
app.use(`/api/${API_VERSION}/comentario`, comentarioRoutes);
app.use(`/api/${API_VERSION}/mensaje`, mensajeRoutes);
app.use(`/api/${API_VERSION}/notificacion`, notificacionRoutes);
app.use(`/api/${API_VERSION}/pais`, paisRoutes);
app.use(`/api/${API_VERSION}/estado`, estadoRoutes);
app.use(`/api/${API_VERSION}/conversacion`, conversacionRoutes);



module.exports = app;