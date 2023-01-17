import mongoose, { Schema } from 'mongoose';
import multer from 'multer';
import path from 'path';
const PIC_PATH = path.join('../../uploads/user');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      // required: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  {
    timestamps: true,
  },
);

// multer config for uploading images
// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '..' + PIC_PATH));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now());
//   },
// });

// UserSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
//   'profilePic',
// );
// // now define where file to be save
// UserSchema.statics.picPath = PIC_PATH;

const User = mongoose.model('User', UserSchema);
export default User;
