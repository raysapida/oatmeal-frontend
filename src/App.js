import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllTweets } from './utils/api';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tweets: []
    }
  }
  componentDidMount() {
    getAllTweets()
      .then((data) => {
        this.setState({tweets: data.tweets})
      })
      .catch((err) => console.warn(err))
  }
  render() {
    const tweets = this.state.tweets;
    const listItems = tweets.map((tweet) =>
      <li key={tweet.id}>{tweet.full_text}</li>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <ul>{ listItems }</ul>
        </section>
      </div>
    );
  }
}

export default App;
