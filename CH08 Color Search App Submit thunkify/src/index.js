import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import App from './App';
import * as actions from "./actions";
import reducer from './reducer'
import { Provider } from 'react-redux';
import colors from './colors.json';//https://jonasjacek.github.io/colors/data.json

const store = createStore(reducer);
  
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)

store.dispatch(actions.setList(colors));


