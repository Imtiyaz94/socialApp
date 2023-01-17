import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const Sidebar = () => {
  const userId = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const values = Object.keys(data).map((key) => data[key]);
  const getData = () => {
    const user = JSON.parse(localStorage.getItem('access_token'));
    const token = user.token;

    axios
      .get(`http://localhost:8000/api/auth/user/${userId}`, {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('user in like', res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log('error profile', err);
        if (err.response.data.error === true) {
          localStorage.removeItem('access_token');
          swal({
            title: 'Token Expired',
            text: 'Redirecting to login page...',
            content: '',
            icon: 'success',
          }).then(function () {
            window.location.reload();
          });
          // navigate('/login');
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const capName = (name) => {
    return name.toUpperCase();
  };
  return (
    <div className='sidebar d-flex center sticky-top shadow-sm rounded '>
      {values ? (
        values &&
        values.map((item) => {
          // console.log('item', item);
          return (
            <div className='card shadow sticky-top' id='card' key={item._id}>
              <div className='card-body '>
                <img
                  src={item.profilePic}
                  className='img-fluid img-thumbnail'
                  id='profilePic'
                  alt='...'
                />
                <div className='mt-3'>
                  <p className='card-title h3'>{item.username}</p>
                  <p className='card-text'>{item.email}</p>
                  <p className='card-text'>{capName(item.gender)}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Sidebar;
