import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import Card from './Card';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
   
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode><Bluebtt/></React.StrictMode>
//   ,document.getElementById('buttonArea')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
