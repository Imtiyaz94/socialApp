import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, redirect } from 'react-router-dom';
import swal from 'sweetalert';

const Signin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const handleInput = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log('resData');
    try {
      const res = await axios.post(
        'http://localhost:8000/api/auth/login',
        user,
      );
      // const token = localStorage.setItem(
      //   'access_token',
      //   JSON.stringify(res.data.token),
      // );
      // setToken(token);
      setError(res.data.message);
      if (res.data.token) {
        localStorage.setItem('access_token', JSON.stringify(res.data.token));

        swal({
          title: 'Login Successfully',
          text: 'Redirecting to home page...',
          content: '',
          icon: 'success',
        }).then(function () {
          window.location.reload();
        });
        navigate('/');
      } else {
        swal('Invalid credentials or User does not exist', '', 'error');
      }
      // i
    } catch (error) {
      // console.log('error', error.response.data.status);
      setError(error.response.data.status);
    }
  }
  // useEffect((e) => {
  //   handleSubmit(e);
  // }, []);
  return (
    <div className='container mt-5 p-3 shadow-sm ' id='signup-form'>
      <div className='form-heading h2 text-center'>Sign In</div>
      <div id='emailHelp' className='form-text text-danger'>
        {error}
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={user.email}
            aria-describedby='emailHelp'
            onChange={handleInput}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            value={user.password}
            className='form-control'
            id='password'
            onChange={handleInput}
            required
          />
        </div>
        <button
          type='submit'
          // onClick={handleSubmit}
          className='btn btn-primary'
        >
          Login
        </button>
        <p className='signup_link'>
          Don't have an account ?{' '}
          <Link to='/register' style={{ textDecoration: 'none' }}>
            Register
          </Link>{' '}
          here
        </p>
      </form>
    </div>
  );
};

export default Signin;
