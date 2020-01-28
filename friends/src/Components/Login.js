// build out a simple login form with username and password inputs and a submit button. 
// The login function should save the returned token to localStorage. You can setup isLoading state in your Login component, and show a spinner on your form or in your button while the login request is happening.
// When the request returns, save the token to localStorage, then use the history object in your Login component to navigate your user to your FriendsList route

import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
            // redirect to main page vv
        this.props.history.push('/protected');
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className='login-form'>
        <form onSubmit={this.login}>
          <input type='text' name='username' value={this.state.credentials.username} onChange={this.handleChange} />
          <input type='password' name='password' value={this.state.credentials.password} onChange={this.handleChange} />
          <button>Log in here!</button>
        </form>
      </div>
    );
  }
}

export default Login;