import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up</h5>
          <div className='input-field'>
            <input type='email' id='email'  onChange={this.handleChange} />
            <label htmlFor='email'>
              Email
            </label>
          </div>
          <div className='input-field'>
            <input type='password' id='password' onChange={this.handleChange} />
            <label htmlFor='password' >
              Password
            </label>
          </div>
          <div className='input-field'>
            <input type='text' id='lastName' onChange={this.handleChange} />
            <label htmlFor='lastName' >
              Last name
            </label>
          </div>
          <div className='input-field'>
            <input type='text' id='firstName' onChange={this.handleChange} />
            <label htmlFor='firstName' >
              First Name
            </label>
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
