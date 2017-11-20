import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';
import {signup, login, logout} from './actions/session_actions.js';
import {fetchAllBusiness, fetchBusiness, updateBusiness} from './actions/business_actions.js';
import {fetchAllReviews} from './actions/review_actions';
document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser){
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
