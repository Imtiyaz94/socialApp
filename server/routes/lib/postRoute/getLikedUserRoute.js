import { Like, Post, User } from '../../../db/models/index.js';

export const getLikeUserRoute = async (req, res) => {
  const postId = req.params.id;
  console.log('postid by like', postId);
  const post = await Post.findById({ _id: postId });

  // console.log('post by user', post);
  //   const { userId } = req.user;

  const like = await await Like.find({
    $and: [{ postId: post._id }, { isDeleted: false }],
  });
  const mapUser = like.map((user) => {
    // console.log('user in map', user.userId);
    return user.userId;
  });

  const likedUser = await User.find({ _id: { $in: mapUser } });
  // console.log('like by user', likedUser);
  const { username, _id, ...user } = { ...likedUser };
  return res.status(200).send({ ...user });
};
