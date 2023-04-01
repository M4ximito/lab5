const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Adres IP serwera: ${os.networkInterfaces().eth0[0].address}<br>Nazwa serwera: ${os.hostname()}<br>Wersja aplikacji: ${process.env.npm_package_version}`);
});

app.listen(port, () => {
  console.log(`Aplikacja działa na porcie ${port}`);
});
