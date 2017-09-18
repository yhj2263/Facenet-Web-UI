const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const exec = require('child_process').exec;
const modelIndex = require('../data/model/index.json');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(fileUpload());
// TODO: check the security of this module
app.use(cors());

console.log('node is running!');

// TODO: refactor this into different services

// Used for checking the working status of the server
app.get('/status', function(req, res) {
    res.send('hello world!');
});

// Used for handling post request to upload file
app.post('/upload_train', function(req, res) {
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
  });

  console.log('file uploaded!');
  res.send('file uploaded!');

  // TODO: The unziped file may contain dummy files, figure out a way to remove
  // Unzip the uploaded file
  console.log('unziping file');
  const childUnzip = exec('unzip ' + __dirname + '/../data/' + sampleFile.name +
  ' -d ' + __dirname + '/../data/train_data',
  function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });

  // Used to get rid of the warning
  if (!childUnzip) {}
  console.log('file unziped!');
});

// Used for handling post request to upload file
app.post('/upload_test', function(req, res) {
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
  });

  console.log('file uploaded!');
  res.send('file uploaded!');

  // TODO: The unziped file may contain dummy files, figure out a way to remove
  // Unzip the uploaded file
  console.log('unziping file');
  const childUnzip = exec('unzip ' + __dirname + '/../data/' + sampleFile.name +
  ' -d ' + __dirname + '/../data/test_data',
  function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });

  // Used to get rid of the warning
  if (!childUnzip) {}
  console.log('file unziped!');
});

// Used for handling post request to start training classifier
app.post('/start_train', function(req, res) {
  // Error 400 if the file is missing
  if (!req.body) {
    return res.status(400).send('No files were uploaded.');
  }
  console.log('file uploaded!');
  res.send(req.body.msg + ' recieved!');
  console.log(req.body);
});

app.get('/model', function(req, res) {
  res.json(modelIndex);
});

// The server is running on port 8081
app.listen(process.env.PORT || 8081);
