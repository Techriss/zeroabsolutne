const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

const folderPath = path.join(__dirname, 'ex');

app.use(express.static('public'));

app.get('/files', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Błąd odczytu folderu z plikami');
    }

    res.json({files});
  });
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
