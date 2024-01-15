const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const folderPath = path.join(__dirname, 'public', 'ex');

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/files', (req, res) => {
	fs.readdir(folderPath, (err, files) => {
		if (err) {
			console.error(err);
			return res.status(500).send('Błąd odczytu folderu z plikami');
		}

		res.json({files});
	});
});

app.use(function(req,res) {
    res.status(404).render(path.join(__dirname, 'public', '404.html'));
});

const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
