import React from 'react';

const SingleRepo = ({repo}) => (
  <div className="single-repo">
    {/* <span className="owner-image"><img src={repo.avatar_url} /></span> */}
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
    <span className="watch-count">Watchers: {repo.watchers_count}</span>
  </div>
)

export default SingleRepo;