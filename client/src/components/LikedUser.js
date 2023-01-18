import React, { useEffect, useState } from 'react';
import '../styles/like.css';
import axios from 'axios';

const LikedUser = ({ postId, userId }) => {
  const [liked, setLiked] = useState({});
  const values = Object.keys(liked).map((key) => liked[key]);
  //   console.log('values', values, liked);

  const getLiked = async () => {
    const user = JSON.parse(localStorage.getItem('access_token'));
    const token = user.token;

    axios
      .get(`http://localhost:8000/api/auth/${postId}/liked`, {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        // console.log('liked user', res.data);
        setLiked(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getLiked();
  }, []);
  //   const likeMap = (item)=>{
  //     values.
  //   }
  return (
    <div>
      {values &&
        values.map((item, id) => {
          console.log('likes', item);
          return (
            <div key={id}>
              <img src={item.profilePic} className='like_img me-3' alt='...' />
            </div>
          );
        })}
    </div>
  );
};

export default LikedUser;
