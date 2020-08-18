import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Lesson from "./02_components/Lesson";
import Counter from "./03_state/Lesson";
import CounterButton from "./04_props/Lesson";
import {Lesson05, Counter05} from "./05_props/Lesson"
import Events from "./06_events/Lesson";
import ConditionalRendering from "./07_conditional_rendering/Lesson";
import ListKeys from "./08_List_Keys/Lesson";
import Table09 from "./09_Fragment_&_css/Lesson";

ReactDOM.render(
  <React.StrictMode>
      {/* <Lesson />*/}
      {/* <Counter />*/}
      {/* <CounterButton />*/}
      {/*<Events />*/}
      {/*<ConditionalRendering />*/}
      {/*<ListKeys />*/}
      <Table09 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
