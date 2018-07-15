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
      .then(response => this.setState( { repos: response.data } ))
      .catch(error => console.log("Error: ", error))
    }
    
    componentDidMount() {
      axios.get('/repos')
      .then(response => this.setState( { repos: response.data } ))
      .catch(error => console.log("Error: ", error))
    // this.state.repos = this.search('leerssej')
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