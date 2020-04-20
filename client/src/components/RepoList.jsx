import React from 'react';
import SingleRepo from './SingleRepo.jsx';

const RepoList = (props) => {
  let repoList = props.repos;
  let repos = repoList.map((repo) => {
    <SingleRepo repo={repo} />
  });
  return (
    <div>
      <h4> Repo List Component </h4>
      <p>There are {props.repos.length} repos.</p>
  <div className="repo-list">{repos}</div>
    </div>
  );
}

export default RepoList;