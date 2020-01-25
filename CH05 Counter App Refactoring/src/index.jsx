import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';
import reducer from './reducer';

const store = createStore(reducer);

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootElement
)
