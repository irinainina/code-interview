import './style_main/bootstrap.min.css';
import './style_main/main.css';
import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default class App extends Component {
  state = {
    score: 0,
    taskType: '',
    taskN: '',
  }

  componentDidMount() {
    this.onItemSelected();
  }

  onItemSelected() {
    const nav = document.querySelector('nav');
    nav.addEventListener('click', (e) => {
      if (e.target.closest('[data-type]')) {
        const taskType = e.target.dataset.type;
        const taskN = e.target.dataset.task;
        this.setTask(taskType, taskN);
      }
    });
  }

  setTask(taskType, taskN) {
    this.setState({
      taskType,
      taskN,
    })
  }

  render() {
    return (
      <>
        <header className="text-white bg-primary">
          <Menu />
          <Header score={this.state.score} />
        </header>
        <Main taskType={this.state.taskType} taskN={this.state.taskN}/>
      </>
    );
  }
}
