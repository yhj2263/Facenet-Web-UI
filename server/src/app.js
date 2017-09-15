const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(fileUpload());
// TODO: check the security of this module
app.use(cors());

console.log('node is running!');

// Used for checking the working status of the server
app.get('/status', function(req, res) {
    res.send('hello world!');
});

// Used for handling post request to upload file
app.post('/upload', function(req, res) {
  // Error 400 if the file is missing
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  // Read the file from the post request
  let sampleFile = req.files.sampleFile;
  console.log('uploading ' + sampleFile.name);
  // Use the mv() method to place the uploaded file to the data directory
  sampleFile.mv(__dirname + '/../data/' + sampleFile.name, function(err) {
    // Error 500 if the mv() method fails
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded!');
  });
  console.log('file uploaded!');
});

// The server is running on port 8081
app.listen(process.env.PORT || 8081);
