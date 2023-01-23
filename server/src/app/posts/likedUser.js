import { Like, User } from '../../../db/models/index.js';

export const likedUser = async ({ post }) => {
  const like = await Like.find({
    $and: [{ postId: post._id }, { isDeleted: false }],
  });

  const mapUser = like.map((user) => {
    // console.log('user in map', user.userId);
    return user.userId;
  });

  const likedUser = await User.find({ _id: { $in: mapUser } });
  return likedUser;
};
