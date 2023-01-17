import React from 'react';
import Post from './Post';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Headers = () => {
  const navigate = useNavigate();
  const logOut = () => {
    // const getToken = localStorage.getItem('access_token');
    localStorage.removeItem('access_token');
    swal({
      title: 'Logout Successfully',
      text: 'Redirecting to login page...',
      content: '',
      icon: 'success',
    }).then(function () {
      window.location.reload();
    });
    navigate('/login');
  };
  return (
    <div className='header rounded d-flex'>
      <h2>FB Clone</h2>
      <Post />
      <form>
        <button className='btn btn-danger' onClickCapture={logOut}>
          Logout
        </button>
      </form>
    </div>
  );
};

export default Headers;
