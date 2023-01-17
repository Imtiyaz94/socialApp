import { Like, Post } from '../../../db/models/index.js';
import { saveLike } from '../../../db/queries/post/saveLike.js';

export const createLike = async ({ userId, postId }) => {
  // console.log('user and post id', userId, postId);
  // const post = await Post.findById(postId);
  const savedLike = await saveLike({ userId, postId });

  const response = {
    error: false,
    savedLike,
  };
  return response;
};
