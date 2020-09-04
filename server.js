const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(fileUpload());
app.use(cors());
// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  if (/[^a-zA-Z0-9|\.|\-|\_ ]/g.test(file.name)) {
    res.status(500).send('Evitar el uso de caracteres especiales');
  } else {
    const name = file.name.replace(/[^a-zA-Z0-9|\.|\-|\_ ]/g, '');

    file.mv(`${__dirname}/uploads/${name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: name, filePath: `/uploads/${name}` });
    });
  }
});
app.get(`/getVideo`, (req, res) => {
  try {
    const name = req.query.video.replace(/[^a-zA-Z0-9|\.|\-|\_ ]/g, '');
    let path = '';
    name === 'Digevo-Video-Demo-Prueba_Coco_02938947589126.mp4'
      ? (path = `demo/${name}`)
      : (path = `uploads/${name}`);
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      const chunksize = end - start + 1;
      const file = fs.createReadStream(path, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      };

      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(200, head);
      fs.createReadStream(path).pipe(res);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
  }
});
app.listen(3001, () => console.log('Server Started...'));
