import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: "", firstName: "", lastName: "", zipCode: "", birthday: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loggedIn){
      this.props.history.push('/');
    }
  }

  update(field){
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = {}
    user.first_name = this.state.firstName
    user.email = this.state.email
    user.last_name = this.state.lastName
    user.password = this.state.password
    user.zip_code = this.state.zipCode
    user.birthday = this.state.birthday
    this.props.actionForm(user);
  }

  demoLogin(e){
    e.preventDefault();
    let user = {email: "demo@demo.com", password: "pokerchan"};
    this.props.actionForm(user);
  }

  navLink(){
    if (this.props.formType === 'login'){
      return <Link to='/signup'>Sign up instead</Link>;
    } else {
      return <Link to='/login'>log in instead</Link>;
    }
  }

  renderErrors(){
    return(
      <ul className="ul-errors">
        {
          this.props.errors.map( (error, idx) => (
            <li key={`${idx}`}>{error}</li>
          ))
        }
      </ul>
    );
  }

  render(){
    const text = this.props.formType === 'login' ? 'Log In' : 'Sign Up';
    let firstNameInput;
    let lastNameInput;
    let zipCodeInput;
    let birthday;
    let signUpTopHalf;
    let miniLogin;
    let miniSignup;
    let demoLoginButton;
    let logInTopHalf;
    if (this.props.formType === 'signup') {
      firstNameInput = (
        <label className="input-field">
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.update('firstName')}
            placeholder="First Name" />
        </label>
      )
      lastNameInput = (
        <label className="input-field">
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.update('lastName')}
            placeholder="last Name" />
        </label>
      )
      zipCodeInput = (
        <label className="input-field">
          <input
            type="text"
            value={this.state.zipCode}
            onChange={this.update('zipCode')}
            placeholder="ZIP Code" />
        </label>
      )
      birthday = (
        <label className="input-field">Birthday
          <input
            type="date"
            value={this.state.birthday}
            onChange={this.update('birthday')} />
        </label>
      )
      signUpTopHalf = (
        <div>
          <h1>Sign Up for VELP</h1>
          <h3>Connect with great local businesses</h3>
          <p>By signing up, you agree to VELP's Terms of Service and Privacy Policy</p>
          <div className='fb-link'>
            <Link to='/'>Sign Up with Facebook</Link>
          </div>
          <p>Don't worry, we never post without your permission</p>
        </div>
      )
      miniLogin = (
        <div>
          <small>Already on Velp? <Link to='/login'>Log in</Link></small>
        </div>
      )
    } else {
      demoLoginButton = (
        <button className="demo-login" onClick={this.demoLogin}>Demo</button>
      )
      logInTopHalf = (
        <div>
          <h1>Log In to Velp</h1>
          <h3>New to Velp?<Link to='/signup'>Sign up</Link></h3>
          <p>By logging in, you agree to Velp's Terms of Service and Privacy Policy.</p>
        </div>
      )
      miniSignup = (
        <div>
          <small>New to Velp? <Link to='/signup'>Sign Up</Link></small>
        </div>
      )
    }

    // let demoLoginButton;
    // if (this.props.formType === 'login') {
    //   demoLoginButton = <button onClick={this.demoLogin}>Demo</button>
    // }

    return(
      <div className="main-session-wrap">

          <div className="wrap-header"><h1 className="logo-head">VELP</h1></div>

          {this.renderErrors()}
          <div className="entire-form-wrapper">
          <div className="column-container">
            <form onSubmit={this.handleSubmit}>
              <div className="login-signup-container">
                <div className="login-signup-form">
                  {signUpTopHalf}
                  {logInTopHalf}
                  {demoLoginButton}
                  {firstNameInput}
                  {lastNameInput}
                  <label className="input-field">
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.update('email')}
                      placeholder="Email" />
                  </label>

                  <br/>

                  <label className="input-field">
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      placeholder="Password"/>
                  </label>
                  {zipCodeInput}
                  {birthday}
                  <br/>
                  <input className="red-button" type='submit' value={text} />
                  <br/>
                  {miniSignup}
                  {miniLogin}
                </div>
              </div>

            </form>
          </div>

          <div className="column-img">
            <div className="img-container"><img src="assets/signup_illustration.png"/></div>
          </div>

        </div>

      </div>
    )
  }
}

export default withRouter(SessionForm);
