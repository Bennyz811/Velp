import React from 'react';
import {Link} from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    <br/>
    <Link to="/signup">Signup</Link>
  </nav>
)

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">{currentUser.email}</h2>
    <button onClick={logout}>Log out</button>
  </hgroup>
)

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
)

export default Greeting;
