const express = require('express');
const bodyParser = require('body-parser');
const githubRepos = require('../helpers/github').getReposByUsername;
const db = require('../database');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/repos', (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API,
  githubRepos(req.body.username, (err, data) => {
    if (err) {
      console.log('Error getting repos from server.index.js: ', err);
    } else {
      // then save the repo information in the database
      // console.log('Successfully retrieved data!', Array.isArray(data));
      // var count=0;
      data.forEach(repo => db.save(repo, (err, result) => {
        // console.log(count++);
        if (err) {
          return console.error(err);
        }
        console.log(result.name + " saved to the repo collection.");

      }));
      res.status(201);
      res.send(data);
    }
  });

}, );

app.get('/repos', (req, res) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getTopRepos((err, data) => {
    if (err) {
      res.status(404);
      res.send(err);
    }
    // console.log('Callback successful. ', data);
    res.send(data);
  })
});

let port = process.env.PORT || 1128;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

