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
  }

  // Load top 25 repos in database when component mounts
  componentDidMount () {
    $.get('/repos', this.render);
  }

  search (term) {
    $.post('/repos', {"username": term})
      .done((data) => console.log('Saved.', data))
      .fail((err) => {
        console.error(err);
        alert(`Lookup for user ${term} failed. Please try again.`)
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