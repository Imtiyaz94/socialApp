import { Post } from '../../models/index.js';

export const deletePost = async ({ postId, userId }) => {
  try {
    // console.log('post', value, userId.userId, images);
    
      const deletedPost = await Post.findByIdAndDelete(postId);
      return deletedPost;
    
    // return { error: true, message: 'No Post found' };
  } catch (error) {
    return { error: true, error };
  }
};
