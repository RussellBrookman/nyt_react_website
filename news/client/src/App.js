import React, { Component } from 'react';
import API from "./utils/API";
import Layout from "./Layout";
import Search from './Search';
import Nav from "./Nav";
import { Container } from "./Grid";
import './App.css';


// by calling supper(props) I am calling the parent element with the props parameter
// things I need to add: saved[], start: date, end: date
class App extends Component {
  contructor(props) {
    super(props);

    this.state = {
      search: [],
      topics: ""
    };
  };

// promise
componentDidMount() {
  this.loadSaved();
};

searchArticles = (topics) => {
  API.search(topics).then(res => this.setState({
    search: res.data.response.docs.trim();
  })).catch(err => console.log(err));
};

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  this.searchArticles(this.state.topics);
};

loadSaved = () => {
  API.getArticles().then(res => 
    this.setState({ saved: res.data })).catch(err => console.log(err));
};

  render() {
    return (
      <div className="App">
        <header className="header">
          <Nav />
          <Container fluid>
            <Search
              state={this.state}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}  
            />
          </Container>  
        </header>
        <Container fluid>
          <Layout
            results={this.state.search}
            saveArticle={this.saveArticle}
          />
        </Container>
      </div>
    );
  }
}

export default App;
