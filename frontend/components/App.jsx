import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
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
  <div>
    <h1>VELP</h1>
    <GreetingContainer/>

    <Switch>
      <Route path='/login' component={SessionFormContainer}/>
      <Route path='/signup' component={SessionFormContainer}/>
    </Switch>
  </div>
)

export default App;
