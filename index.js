const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Actualizado (♥♥♥♥ EMMA ♥♥♥♥) - Hola Mundo desde Express y Coolify 🚀</h1>');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
