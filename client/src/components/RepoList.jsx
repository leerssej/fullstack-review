import React from 'react';

const RepoList = (props) => {
  const repos = props.repos;
  const listItems = repos.map((repo, idx) => 
    <li key={idx.toString()}>{repo.name}</li>
  );
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      <ul>{listItems}</ul>
    </div>
  );
}

export default RepoList;