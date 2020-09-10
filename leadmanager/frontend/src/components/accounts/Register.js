import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, password, password2 } = this.state;
    return (
      <div className='col-md-6 m-auto'>
        <div className='card card-body mt-5'>
          <h2 className='text-center'>Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Username</label>
              <input
                type='text'
                value={username}
                onChange={this.onChange}
                name='username'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                value={email}
                onChange={this.onChange}
                name='email'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                value={password}
                onChange={this.onChange}
                name='password'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label>Repeat password</label>
              <input
                type='password'
                value={password2}
                onChange={this.onChange}
                name='password2'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
