import React from 'react';
import {Link} from 'react-router-dom';

const sessionLinks = () => (
  <nav className="main-header-nav">
    <Link className="login-link" to="/login">Log In</Link>
    <br/>
    <Link className="signup-link" to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name"><img src={currentUser.image_url}/></h2>
    <button onClick={logout}>Log out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
