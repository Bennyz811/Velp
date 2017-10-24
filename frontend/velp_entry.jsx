import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
