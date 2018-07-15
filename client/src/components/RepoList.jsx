import React from 'react';

const RepoList = (props) => {
  const repos = props.repos;
  const listItems = repos.map((repo, idx) => 
    <li key={idx.toString()}>
      <a href={repo.html_url}>
      {repo.name}
      </a>
      <img 
        src={repo.owner_avatar_url || repo.owner.avatar_url} 
        alt={repo.owner_login}
        width='20'
      />
      {repo.stargazers_count}
    </li>
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