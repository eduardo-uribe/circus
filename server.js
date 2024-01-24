#!/usr/bin/env
const circus = require('./circus.js');
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// open local host web page
(async function () {
  const { default: open } = await import('open');
  await open('http://localhost:8080');
})();

// GET: /
app.get('/', function (request, response) {
  const file = path.join(__dirname, './index.html');
  return response.sendFile(file, function (error) {
    if (error) {
      console.log(error);
    }
  });
});

app.get('/test-results', async function (request, response) {
  // get results data
  const { testResults } = await circus();

  // return results data
  return response.status(200).json({
    numFailedTestSuites,
    numFailedTests,
    numPassedTestSuites,
    numPassedTests,
  });
});

app.listen(port, function () {
  console.log('standard output: minimal animation for circus!');
});
