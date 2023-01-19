import Like from '../../../db/models/Like.js';
import PostQueries from '../../../db/queries/index.js';

export const deletePostRoute = async (req, res) => {
  const postId = req.params.id;
  console.log('delete post id', postId);

  const post = await PostQueries.PostQueries.deletePost({ postId });
  console.log('post with likes', post);
  if (!post) {
    return res.status(200).send({ message: 'Post Not Found' });
  }
  const likes = await Like.find({
    $and: [{ postId: post._id }, { isDeleted: false }],
  });
  if (likes.length > 0) {
    await Like.updateMany({ _id: { $in: likes } }, { isDeleted: true });
  }
  await post.remove();
  console.log('post deleted', post._id, likes);
  return res.status(200).send({ message: 'Post Deleted with likes', likes });
};
