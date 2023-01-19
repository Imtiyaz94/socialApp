import { errorHandler } from '../../../src/utils/lib/errors/errorHandling.js';
import { Like, Post } from '../../models/index.js';

export const saveLike = async ({ userId, postId }) => {
  console.log('saving likes', userId._id, postId);
  const post = await Post.findById(postId).select([
    '_id',
    'userId',
    'likeCount',
  ]);
  const likedUser = await Like.findOne({
    $and: [{ userId: userId }, { postId: postId }, { isDeleted: false }],
  });
  // console.log('liked user', likedUser);
  if (!post) {
    return errorHandler(401, 'Post not found');
  }
  if (likedUser) {
    const likedId = likedUser._id;
    const disliked = await Like.findOneAndUpdate(
      { _id: likedId },
      { liked: false, isDeleted: true },
      { new: true },
    );
    // await Like.updateOne({ liked: false });
    post.likeCount--;
    await post.save();
    return { error: true, message: 'Post Disliked', disliked, likedId };
    // return errorHandler(201, 'Post disliked');
  }
  const likeCreate = await Like.create({
    userId: userId,
    postId: postId,
    liked: true,
  });
  // await Like.updateOne({ liked: true });
  post.likeCount++;
  await post.save();
  return { error: false, message: 'Post Liked', likeCreate };
};
// return errorHandler(200, 'Post liked', likeCreate);
