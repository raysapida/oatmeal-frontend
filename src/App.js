import React, { Component } from 'react';

import './App.css';
import { getAllTweets } from './utils/api';


class App extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: 'healthcare',
      tweets: []
    }
  }

  componentDidMount() {
    getAllTweets(this.state.searchTerm)
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
        <section>
          <ul>{ listItems }</ul>
        </section>
      </div>
    );
  }
}

export default App;
