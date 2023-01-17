import { Like, Post, User } from '../../../db/models/index.js';

export const getLikeUserRoute = async (req, res) => {
  const postId = req.params.id;
  console.log('postid by like', postId);
  const post = await Post.findById({ _id: postId });
  console.log('post by user', post._id);
  //   const { userId } = req.user;
  const like = await (await Like.find({ postId: post._id }));
  // const mapUser = like.map((user) => {
  //   console.log('user in map', user.userId);
  //   return user.userId;
  // });

  // const likedUser = await User.findById({ _id: like });
  // console.log('like by user', likedUser);
  return res.status(200).send(like);
};
