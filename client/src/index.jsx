import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.getRepos.bind(this);
  }

  // Load top 25 repos in database when component mounts
  componentDidMount () {
    this.getRepos();
  }

  search (term) {
    $.post('/repos', {"username": term})
      .done((data) => {
        this.getRepos();
      })
      .fail((err) => {
        console.error(err);
        // alert(`Lookup for user ${term} failed. Please try again.`)
      });
  }

  getRepos () {
    $.get('/repos')
    .done(data => {
      this.setState({
        repos: data
      });
    })
    .fail(err => {
      console.error(err);
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));