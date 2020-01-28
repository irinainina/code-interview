import './style/menu.css';
import React, { Component } from 'react';
import menuWorker from './menuWorker';

export default class Menu extends Component {
  componentDidMount() {
    menuWorker();
  }

  render() {
    return (
      <div className="menu-wrapper">
        <nav>
          <div className="menu-btn">
            <div className="line line__1"></div>
            <div className="line line__2"></div>
            <div className="line line__3"></div>
          </div>
          <div className="sub-menu-btn">
            <div className="line line__1"></div>
            <div className="line line__2"></div>
          </div>
          <ul className="nav-links">
            <li className="link">
              Объекты
              <ol className="sub-link-wrapper">
                <li data-type='objects' data-task='task1'>Задача 1</li>
                <li data-type='objects' data-task='task2'>Задача 2</li>
              </ol>
            </li>
            <li className="link">
              Массивы
              <ol className="sub-link-wrapper">
                <li data-type='arrays' data-task='task1'>Задача 1</li>
                <li data-type='arrays' data-task='task2'>Задача 2</li>
              </ol>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
