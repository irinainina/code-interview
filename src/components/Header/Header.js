import './header.css';
import React from 'react';
import Menu from '../Menu/Menu';

const Header = (props) => {
  return (
    <header>
      <Menu />
      <div className="header">
        <h1>JS interviewer</h1>
        <div className="score">
          Score: {props.score}
        </div>
      </div>
    </header>
  )
}

export default Header;