import { Post } from '../../models/index.js';

export const savePost = async ({ value, userId, images }) => {
  try {
    // console.log('post', value, userId.userId, images);
    if (userId) {
      const newPost = await Post.create({
        text: value.text,
        photos: images,
        userId: userId.userId,
      });
      return newPost;
    }
    return { error: true, message: 'Please Login First' };
  } catch (error) {
    return { error: true, error };
  }
};
