import React, { useEffect, useState } from 'react';
import '../styles/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { convertToBase64 } from '../utils';

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [img, setImg] = useState('');

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setImg(base64);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    // console.log('resData');

    const formdata = new FormData();
    formdata.append('username', username);
    formdata.append('email', email);
    formdata.append('password', password);
    formdata.append('confirmPassword', confirmPassword);
    formdata.append('gender', gender);
    formdata.append('profilePic', img);
    // console.log(formdata);

    await axios({
      method: 'POST',
      url: 'http://localhost:8000/api/auth/register',
      data: formdata,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        // console.log('response of signup', res.data.newUser);
        if (res.data.newUser.error === false) {
          swal({
            title: 'User Created Successfully',
            text: 'Redirecting to login page...',
            content: '',
            icon: 'success',
          }).then(function () {
            window.location.reload();
          });
          navigate('/login');
        }
        setError(res.data.newUser);
      })
      .catch((err) => err);
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);
  return (
    <div className='container mt-5 p-4 shadow-sm ' id='signup-form'>
      <div className='form-heading h2 text-center'>Sign Up</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id='username' style={{ color: 'red' }} className='form-text'>
          {error.message}
        </div>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            name='username'
            // value={user.username}
            className='form-control'
            id='username'
            aria-describedby='username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            // value={user.email}
            aria-describedby='emailHelp'
            // onChange={handleInput}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* <div id='emailHelp' style={{ color: 'red' }} className='form-text'>
            {error.message}
          </div> */}
        </div>
        <div className='mb-3'>
          <label htmlFor='gender' className='form-label'>
            Gender
          </label>
          <input
            type='text'
            name='gender'
            // value={user.gender}
            className='form-control'
            id='gender'
            aria-describedby='gender'
            // onChange={handleInput}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </div>
        {/* <div id='gender' style={{ color: 'red' }} className='form-text'>
          {error.message}
        </div> */}
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            // value={user.password}
            className='form-control'
            id='password'
            aria-describedby='password'
            // onChange={handleInput}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* <div id='password' style={{ color: 'red' }} className='form-text'>
          {error.message}
        </div> */}
        <div className='mb-3'>
          <label htmlFor='cnfPassword' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            name='cnfPassword'
            // value={user.password}
            className='form-control'
            id='cnfPassword'
            aria-describedby='cnfPassword'
            // onChange={handleInput}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {/* <div id='cnfPassword' style={{ color: 'red' }} className='form-text'>
          {error.message}
        </div> */}
        <div className='mb-3'>
          <label htmlFor='profilePic' className='form-label'>
            Profile Image
          </label>
          <input
            type='file'
            name='profilePic'
            // value={img}
            className='form-control'
            aria-describedby='profilePic'
            id='profilePic'
            onChange={handleFile}
            required
          />
        </div>
        {/* <div id='profilePic' style={{ color: 'red' }} className='form-text'>
          {error.message}
        </div> */}
        <button
          type='submit'
          // onClick={handleSubmit}
          className='btn btn-primary'
        >
          Register
        </button>
        <p className='signup_link'>
          Already have account ?{' '}
          <Link to='/login' style={{ textDecoration: 'none' }}>
            Login
          </Link>{' '}
          here
        </p>
      </form>
    </div>
  );
};

export default Signup;
