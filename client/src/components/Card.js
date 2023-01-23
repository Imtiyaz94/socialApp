import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/card.css';
import Like from './Like';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import LikedUser from './LikedUser';

const Card = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const values = Object.keys(data).map((key) => data[key]);
  // console.log('values', data);
  const getData = () => {
    const user = JSON.parse(localStorage.getItem('access_token'));
    const token = user.token;

    axios
      .get('http://localhost:8000/api/auth/showposts', {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        // console.log('post res', res.data);
        setData(res.data.posts);
      })
      .catch((err) => {
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
          navigate('/login');
        }
      });
  };

  const postDate = (date) => {
    return new Date(date).toLocaleString().split(',');
  };
  const capName = (name) => {
    return name.toUpperCase();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {values ? (
        values &&
        values.map((item) => {
          // console.log('item', item);
          return (
            <div className='card w-50 h-100 shadow ' id='card' key={item._id}>
              <div className='card-body'>
                <span
                  className='d-flex mb-4'
                  style={{ display: 'inline-block' }}
                >
                  <img
                    src={item.userId.profilePic}
                    className='user_img me-3'
                    alt='...'
                  />
                  <h4 className='card-title'>{item.userId.username}</h4>
                </span>
                <figure>
                  <figcaption className='blockquote-footer'>
                    <cite title='Source Title'>
                      Posted At : {postDate(item.createdAt)}
                    </cite>
                  </figcaption>
                </figure>
                {/* <p className='card-text'>Posted At: {item.createdAt}</p> */}
                <p className='card-text'>{item.text}</p>
                <img src={item.photos} className='card-img-top' alt='...' />
              </div>
              <div className='card-footer'>
                <div className='liked_user_pic '>
                  <LikedUser postId={item._id} userId={item.userId._id} />
                </div>
                <div>
                  {/* <small className='text-muted h6'>{item.likeCount}</small> */}
                  <p>{item.likeCount}</p>
                </div>
                <div>
                  <Like postId={item._id} userId={item.userId._id} />
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

export default Card;
