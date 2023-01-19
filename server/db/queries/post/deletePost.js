import { Post } from '../../models/index.js';

export const deletePost = async ({ postId, userId }) => {
  try {
    // console.log('post', value, userId.userId, images);
    
      const posts = await Post.findById(postId);
      return posts;
    
    // return { error: true, message: 'No Post found' };
  } catch (error) {
    return { error: true, error };
  }
};
