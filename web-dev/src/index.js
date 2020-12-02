import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Lesson from "./02_components/Lesson";
import Counter from "./03_state/Lesson";
import CounterButton from "./04_props/Lesson";
import {Lesson05, Counter05} from "./05_props/Lesson"
import Events from "./06_events/Lesson";
import ConditionalRendering from "./07_conditional_rendering/Lesson";
import ListKeys from "./08_List_Keys/Lesson";
import Table09 from "./09_Fragment_&_css/Lesson";
import Form10 from "./10_Forms/Lesson";
import Form12 from "./12_Refs/Lesson";
import Lesson13 from "./13_HOC/Lesson";
import LessonUI13 from "./13_HOC/LessonUI";
import Portal14 from "./14_Portals/Lesson";
import Lesson15 from "./15_Context/Lesson";
import News16 from "./16_API/Lesson";

import Router from './18_Router/Router';
import Home from './18_Router/components/home/home';
import Contacts from './18_Router/components/contacts/contacts';
import Posts from './18_Router/components/posts/posts';

ReactDOM.render(
  <React.StrictMode>
      {/* <Lesson />*/}
      {/* <Counter />*/}
      {/* <CounterButton />*/}
      {/*<Events />*/}
      {/*<ConditionalRendering />*/}
      {/*<ListKeys />*/}
      {/*<Table09 />*/}
      {/*<Form10 />*/}
      {/*<Form12 />*/}
      {/*<Lesson13 />*/}
      {/*<LessonUI13 />*/}
      {/*<Portal14 />*/}
      {/*<Lesson15 />*/}
      {/*<News16 />*/}

      <BrowserRouter>
          <Router>
              <Route exact path='/' component={Home} />
              <Route path='/contacts' component={Contacts} />
              <Route path='/posts' component={Posts} />
          </Router>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
