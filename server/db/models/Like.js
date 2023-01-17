import mongoose, { Schema } from 'mongoose';

const LikeSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  liked: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Number,
    default: Date.now,
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});
const Like = mongoose.model('Like', LikeSchema);
export default Like;
