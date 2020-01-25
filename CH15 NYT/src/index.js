import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import AppRouter from './AppRouter';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
  ));

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));


