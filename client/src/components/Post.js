import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { convertToBase64 } from '../utils/index';

const Post = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setImg(base64);
  };

  const handleSubmit = async () => {
    const user = await JSON.parse(localStorage.getItem('access_token'));
    const token = user.token;
    // console.log('uploaded', img);
    const formdata = new FormData();
    formdata.append('text', text);
    formdata.append('photos', img);
    console.log('formdata', formdata);
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/auth/create_post',
      data: formdata,
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        // console.log('token', res.headers);
        console.log('users data', res.data);

        swal({
          title: 'Post Created Successfully',
          content: '',
          icon: 'success',
        });
      })
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <div className='container '>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='row g-3 p-2'>
          <div className='col-6'>
            <textarea
              type='text'
              className='form-control'
              id='text'
              name='text'
              onChange={(e) => setText(e.target.value)}
              // aria-describedby='emailHelp'
              required
            />
          </div>
          <div className='col-3'>
            <input
              type='file'
              name='file'
              className='form-control'
              aria-describedby='file'
              id='file'
              onChange={handleFile}
              required
            />
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
