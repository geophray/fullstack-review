const express = require('express');
const bodyParser = require('body-parser');
const githubRepos = require('../helpers/github').getReposByUsername;
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API,
  githubRepos(req.body.username, (err, data) => {
    // then save the repo information in the database
    if (err) {
      console.log('Error getting repos from server.index.js: ', err);
    } else {
      console.log('Successfully retrieved data!', data);
    }
  });

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

