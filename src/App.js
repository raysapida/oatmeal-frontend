import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import './App.css';
import { getAllTweets } from './utils/api';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: 'healthcare',
      value: 0,
      tweets: []
    }
  }

  handleChange = (event, value) => {
    let searchTerm = ''
    switch (value) {
      case 0:
        searchTerm = 'healthcare'
        break;
      case 1:
        searchTerm = 'nasa'
        break;
      case 2:
        searchTerm = 'open source'
        break;
      default:
        searchTerm = this.state.searchTerm
        break;
    }
    this.setState({ value, searchTerm });
  };

  componentDidUpdate(){
    getAllTweets(this.state.searchTerm)
      .then((data) => {
        this.setState({tweets: data.tweets})
      })
      .catch((err) => console.warn(err))
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
    const { value } = this.state;

    return (
      <div className="App">
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Healthcare" />
            <Tab label="NASA" />
            <Tab label="Open Source" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><ul>{ listItems }</ul></TabContainer>}
        {value === 1 && <TabContainer><ul>{ listItems }</ul></TabContainer>}
        {value === 2 && <TabContainer><ul>{ listItems }</ul></TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(App);
