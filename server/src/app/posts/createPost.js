import UserQueries from '../../../db/queries/user/index.js';
import PostQueries from '../../../db/queries/post/index.js';
import Post from '../../../db/queries/user/index.js';
import User from '../../../db/models/User.js';
import { errorHandler } from '../../utils/lib/errors/errorHandling.js';

export const createPosts = async ({ value, userId, images }) => {
  try {
    const savingPost = await PostQueries.savePost({ value, userId, images });
    const postInUser = await UserQueries.findAndUpdate(
      { _id: userId },
      // {
      //   $push: { posts: savingPost },
      // },
    );
    // console.log('body user', value);
    if (!postInUser) {
      return { error: true, message: 'Please Login First' };
    }
    const response = {
      error: false,
      message: 'Post Created Successfully',
      savingPost,
      postInUser,
    };
    return response;

    // console.log('user name with post', postInUser);
  } catch (error) {
    return { error: true, message: error };
  }
};
