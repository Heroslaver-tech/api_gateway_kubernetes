const express = require('express');
const app = express();
const port = 3001;

app.get('/servicio-4', (req, res) => {
  res.json({ mensaje: "Respuesta desde Servicio Prueba, soy Daniel y me gustan los videojuegos" });
});

app.listen(port, () => {
  console.log(`Servicio A escuchando en http://localhost:${port}`);
});