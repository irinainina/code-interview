import React, { Component } from 'react';
import Agenda from './Agenda';
import CodeEditor from './CodeEditor';
import objectsQ from '../Qustions/Objects/obj_QData';
import arraysQ from '../Qustions/Arrays/arr_QData';

export default class Main extends Component {
  setData() {
    if (this.props.taskType === 'objects') this.data = objectsQ;
    if (this.props.taskType === 'arrays') this.data = arraysQ;
  }

  render() {
    this.setData();

    if (!this.data) {
      return <p>Hello world</p>;
    }

    return (
      <>
        <Agenda taskN={this.data[this.props.taskN]} />
        <CodeEditor taskN={this.data[this.props.taskN]} />
      </>
    )
  }
}
