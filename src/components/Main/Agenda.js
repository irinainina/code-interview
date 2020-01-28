import React, { Component } from 'react';

export default class Agenda extends Component {
  // так сделано, что бы понимало строку вместе с тегами в ней, иначе можно было функиональным компонентом сделать
  // пока ничего умнее не придумал
  componentDidMount() {
    this.setContent();
  }

  componentDidUpdate() {
    this.setContent();
  }

  setContent() {
    const card = document.querySelector('.card-body');
    card.innerHTML = this.props.taskN.question;
  }

  render() {
    return (
      <div className="card-body card-text text-white bg-secondary"></div>
    );
  }
}
