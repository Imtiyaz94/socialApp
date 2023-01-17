import { Post } from '../../models/index.js';

export const findPost = async (postId) => {
  const post = await Post.findById(postId);
  return post;
};
