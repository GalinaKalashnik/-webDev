import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Lesson from "./02_components/Lesson";
import Counter from "./03_state/Lesson";
import CounterButton from "./04_props/Lesson";

ReactDOM.render(
  <React.StrictMode>
      <Lesson />
      <Counter />
      <CounterButton />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
