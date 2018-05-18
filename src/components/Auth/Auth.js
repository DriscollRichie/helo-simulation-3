import React, { Component } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Auth extends Component {
  constructor() {
    super()
    this.state = {
      usernameInput: '',
      passwordInput: ''
    }
  }

  handleInputChange(key, value) {
    this.setState({[key]: value})
  }

  registerUser() {
    let {usernameInput, passwordInput} = this.state
    axios.post('/api/auth/register', {usernameInput, passwordInput}).then(res => {
      console.log('User has been registered')
    })
  }

  render() {
    return (
      <div>
        <input placeholder='Username' onChange={(e) => this.handleInputChange('usernameInput', e.target.value)}/>
        <input type='password' placeholder='Password' onChange={(e) => this.handleInputChange('passwordInput', e.target.value)}/>
        <button>Login</button>
        <Link to='/dashboard'><button onClick={() => this.registerUser()}>Register</button></Link>
      </div>
    );
  }
}
