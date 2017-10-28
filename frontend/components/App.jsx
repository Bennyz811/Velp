import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import React from 'react';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';
import BusinessIndex from './business/business_index';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
      <Route path='/' component={GreetingContainer}/>
    </Switch>

    <Route path='/businesses' component={BusinessIndex}/>
    <Route exact path='/' component={SplashContainer}/>
    <div className='wrap-footer'>

    </div>
  </div>
)

export default App;
