import './CodeEditor.css';
import React from 'react';

const CodeEditor = (props) => {
  let arg = '';
  if (props.taskN.funcVar) {
    arg = props.taskN.funcVar.join(', ');
  }

  const brakets = ['{', '}'];

  return (
    <div className="jumbotron">
      <pre>
        <code>function foo({arg}) {brakets[0]}</code>
        <input type="text" className="code-editor" />
        <code>{brakets[1]}</code>
      </pre>
    </div>
  );
}

export default CodeEditor;