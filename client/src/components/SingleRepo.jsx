import React from 'react';

const SingleRepo = ({repo}) => (
  <div className="single-repo">
    <a href={repo.html_url} >{repo.name}</a>
  </div>
)

export default SingleRepo;