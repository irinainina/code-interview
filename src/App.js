import './style_main/bootstrap.min.css';
import './style_main/main.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';

export default class App extends Component {
  state = {
    score: 0,
  }

  render() {
    return (
      <Header score={this.state.score} />
    );
  }
}
