import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [],
    }
  }

  search(term) {
    console.log(`${term} was entered`);
    axios.post('/repos', {term})
      .then(response => console.log("Response: ", response))
      .catch(error => console.log("Error: ", error))
  }

  componentDidMount() {
    this.state.repos = this.search()
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));