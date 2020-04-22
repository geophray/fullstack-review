import React from 'react';
import SingleRepo from './SingleRepo.jsx';

const RepoList = (props) => {
  let repoList = props.repos.map(singleRepo => {
    return <SingleRepo key={singleRepo._id} repo={singleRepo} />
  });
  return (
    <div>
      <h4> Repo List Component </h4>
      <p>There are {props.repos.length} repos.</p>
      <div className="repo-list">{repoList}</div>
    </div>
  );
}

export default RepoList;