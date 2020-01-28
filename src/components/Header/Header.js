import './header.css';
import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <h1>JS interviewer</h1>
      <div className="score">
        Score: {props.score}
      </div>
    </div>
  )
}

export default Header;