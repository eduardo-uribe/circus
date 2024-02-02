#!/usr/bin/env
const circus = require('./circus.js');
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// developers root directory
const root = __dirname.substring(__dirname.lastIndexOf('\\') + 1);

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
  const {
    testResults,
    numPassedTests,
    numPassedTestSuites,
    numFailedTests,
    numFailedTestSuites,
  } = await circus();

  // files paths
  let paths = [];
  for (let i = 0; i < testResults.length; i++) {
    // remove string before root directory name
    let path = testResults[i].testFilePath;
    path = path.substring(path.lastIndexOf(root));

    // replace '\\' in path name with '/'
    path = path.replaceAll('\\', '/');

    paths.push(path);
  }

  // HAZARD - TESTING LABORATORY
  let result = [];
  let level = { result };

  paths.forEach((path) => {
    path.split('/').reduce((r, name, i, a) => {
      if (!r[name]) {
        r[name] = { result: [] };
        r.result.push({ name, children: r[name].result });
      }
      return r[name];
    }, level);
  });
  // END OF HAZARD

  // return response.status(200).json(JSON.stringify(result));
  return response.status(200).json({
    numPassedTests,
    numFailedTests,
    numPassedTestSuites,
    numFailedTestSuites,
    result,
  });
});

app.listen(port, function () {
  console.log('standard output: minimal animation for circus!');
});
