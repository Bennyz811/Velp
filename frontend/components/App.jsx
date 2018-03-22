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
import Search from './business/search';
import SearchContainer from './business/search_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessShowContainer from './business/business_show_container';
import ReviewFormContainer from './review/review_form_container';
import Footer from './footer.jsx';


const App = () => (
  <div>
    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionFormContainer}/>
      <Route path='/' component={GreetingContainer}/>
    </Switch>

    <Route exact path='/search' component={BusinessIndexContainer}/>
    <Route path='/businesses/search/:businessId' component={BusinessShowContainer}/>
    <Route path='/:businessId/write_review' component={ReviewFormContainer}/>
    <Route exact path='/' component={SplashContainer}/>
    <Footer/>
  </div>
);
// {/* <Route path='/businesses/search' component={SearchContainer}/> */}

export default App;
