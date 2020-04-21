const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  _id: Number,
  name: String,
  html_url: String,
  watchers_count: Number,
  owner: String,
  avatar_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let newrepo = new Repo({
    _id: repo.id,
    name: repo.name,
    html_url: repo.html_url,
    watchers_count: repo.watchers_count,
    owner: repo.owner.login,
    avatar_url: repo.owner.avatar_url
  })
  newrepo.save((err, repo) => {
    callback(err, repo);

  })

}

module.exports.save = save;