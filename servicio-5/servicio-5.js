const express = require('express');
const app = express();
const port = 4001;

app.get('/service-5', (req, res) => {
  res.json({ mensaje: "Respuesta desde Servicio Prueba, Soy Juan Pablo y me gusta comer avena y hacer ejercicio" });
});

app.listen(port, () => {
  console.log(`Servicio A escuchando en http://localhost:${port}`);
});