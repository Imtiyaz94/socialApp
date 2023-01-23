import PostQueries from '../../../db/queries/post/index.js';
import { likedUser } from '../../../src/app/posts/index.js';

export const getLikeUserRoute = async (req, res) => {
  const postId = req.params.id;
  const post = await PostQueries.findPost(postId);
  // console.log('post by user', post);

  if (!post) {
    return res.status(200).send({ message: 'No Post Found' });
  }

  const users = await likedUser({ post });
  // console.log('like by user', likedUser);
  const { username, _id, ...user } = users;
  return res.status(200).send({ ...user });
};
