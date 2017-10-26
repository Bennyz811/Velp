import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: "", firstName: "", last_name: "", zip_code: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const user = Object.assign({}, this.state)
    this.props.actionForm(user);
  }

  demoLogin(){
    e.preventDefault();
    return(e) => {
      this.props.login({username:'guest', password:"123456"});
    }
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
    if (this.props.formType === 'signup') {
      firstNameInput = (
        <label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.update('firstName')}
            placeholder="First Name" />
        </label>
      )
      lastNameInput = (
        <label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.update('lastName')}
            placeholder="last Name" />
        </label>
      )
      zipCodeInput = (
        <label>
          <input
            type="text"
            value={this.state.zipCode}
            onChange={this.update('zipCode')}
            placeholder="ZIP Code" />
        </label>
      )
      birthday = (
        <label>Birthday
          <input
            type="date"
            value={this.state.birthday}
            onChange={this.update('birthday')} />
        </label>
      )
    }

    return(
      <div className="main-header">

        <form onSubmit={this.handleSubmit}>
          <div className="wrap-header"><h1 className="logo-head">VELP</h1></div>
          <div className="login-signup-container">
            <div className="login-signup-form">
              {this.renderErrors()}
              {firstNameInput}
              {lastNameInput}
              <label>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email" />
              </label>

              <br/>

              <label>
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
            </div>
          </div>

        </form>
        <div className="img-container"><img src="signup_illustration.jpg"/></div>
      </div>
    )
  }
}

export default withRouter(SessionForm);
