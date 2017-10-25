import React from 'react';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
    <div className="homepage">
      <GreetingContainer/>
      <Link to='/' className="logo-nav-link">
        <h1>VELP</h1>
      </Link>

    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
    </Switch>

  </div>
)

export default App;
