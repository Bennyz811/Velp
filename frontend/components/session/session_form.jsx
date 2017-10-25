import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: "", firstName: ""};
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

  navLink(){
    if (this.props.formType === 'login'){
      return <Link to='/signup'>Sign up instead</Link>;
    } else {
      return <Link to='/login'>log in instead</Link>;
    }
  }

  renderErrors(){
    return(
      <ul>
        {
          this.props.errors.map( (errors, idx) => (
            <li key={`${idx}`}>{errors}</li>
          ))
        }
      </ul>
    );
  }

  render(){
    const text = this.props.formType === 'login' ? 'Log In' : 'Sign Up';
    let firstNameInput;
    if (this.props.formType === 'signup') {
      firstNameInput = (
        <label>First name
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.update('firstName')} />
          </label>
      )
    }

    return(
      <div className="main-header">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            {firstNameInput}
            <label>Email
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')} />
            </label>
            <br/>
            <label>Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}/>
            </label>
            <br/>
            <input type='submit' value={text} />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
