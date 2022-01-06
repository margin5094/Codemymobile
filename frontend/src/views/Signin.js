import axios from 'axios';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('initialState');

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post('/signin', {email, password})
      .then(data => {
        localStorage.setItem(('userInfo', JSON.stringify(data)));
      })
      .catch(err => {});
  };
  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>

          <input
            type='email'
            id='email'
            onChange={e => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>

          <input
            type='password'
            id='password'
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button className='btn btn-primary' type='submit'>
            Sign In
          </button>
        </div>
        <div>
          <div>
            New User? <Link to='/register'>Create Your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
