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
              <a href="#">Home</a>
            </li>
            <li className="link">
              <a href="#">About</a>
              <ol>
                <li><a href="#">designers</a></li>
                <li><a href="#">developers</a></li>
              </ol>
            </li>
            <li className="link">
              <a href="#">Work</a>
              <ol>
                <li><a href="#">web</a></li>
                <li><a href="#">graphic </a></li>
                <li><a href="#">apps </a></li>
              </ol>
            </li>
            <li className="link">
              <a href="#">Contact</a>
              <ol>
                <li><a href="#">Email</a></li>
                <li><a href="#">Social</a></li>
              </ol>
            </li>
            <li className="link">
              <a href="#">follow me</a>
              <ol>
                <li>
                  <a target="_blank" href="https://twitter.com/DevLoop01">
                    Twitter <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://codepen.io/dev_loop/">
                    Codepen <i className="fab fa-codepen"></i>
                  </a>
                </li>
              </ol>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
