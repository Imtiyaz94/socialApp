import User from '../../../db/models/User.js';
import Post from '../../../db/models/Post.js';

export const deletePost = async ({ value, userId, images }) => {
  try {
    const postDelete = await Post.findById(userId);
    // console.log('user name with post', postInUser);

    const response = {
      error: false,
      postInUser,
    };

    return response;
  } catch (error) {
    return { error: true, message: error };
  }
};
