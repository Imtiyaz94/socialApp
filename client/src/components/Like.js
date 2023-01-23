import React, { useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import '../styles/like.css';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Like = ({ postId, userId }) => {
  const navigate = useNavigate();
  // console.log('all postid', postId, userId);
  const [liked, setLiked] = useState(false);

  const handleSubmit = async () => {
    const user = await JSON.parse(localStorage.getItem('access_token'));
    const token = user.token;
    // console.log(token);
    const formdata = new FormData();
    axios({
      method: 'POST',
      url: `http://localhost:8000/api/auth/${postId}/like`,
      data: formdata,
      headers: {
        Authorization: `${token}`,
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        console.log('like ', res.data);

        if (res.data.savedLike.error === false) {
          swal({
            title: 'Post liked',
            content: '',
            icon: 'success',
          }).then(function () {
            window.location.reload();
          });
          setLiked(true);
          navigate('/');
        } else {
          swal({
            title: 'Post Disliked',
            content: '',
            icon: 'success',
          }).then(function () {
            window.location.reload();
          });
          setLiked(false);
          navigate('/');
        }
        // console.log('users data', res.data.savedLike);
      })
      .catch((err) => {
        // console.log(err);
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
  // useEffect(() => {
  //   handleSubmit();
  // }, []);
  return (
    <div>
      {liked ? (
        <button className='likeBtn' onClick={handleSubmit}>
          {<AiFillLike />}
        </button>
      ) : (
        <button className='likeBtn' onClick={handleSubmit}>
          {<AiOutlineLike />}
        </button>
      )}
    </div>
  );
};

export default Like;
