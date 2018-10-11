import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import characterReducer from "./reducers/characterReducer";
import App from "./App";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  characterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);



registerServiceWorker();
