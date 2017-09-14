const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(fileUpload());

console.log('node is running!');

app.get('/status', function(req, res) {
    res.send('hello world!');
});

app.post('/upload', function(req, res) {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  let sampleFile = req.files.sampleFile;
  console.log('uploading ' + sampleFile.name);
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(__dirname + '/../data/' + sampleFile.name, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded!');
  });
  console.log('file uploaded!');
});

app.listen(process.env.PORT || 8081);
