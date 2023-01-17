import { Post } from '../../../db/models/index.js';

async function showPosts() {
  // let userPost = await Post.find().sort('-createdAt').populate('userId');
  // // .populate('_id');
  // //   if (!users) {
  // //     return res.status(201).send({ message: 'Not found' });
  // //   }
  // console.log('userpost', userPost);
  // return userPost;
  // next();
  let posts = await Post.find()
    .sort('-createdAt')
    .populate('userId')
    .populate('_id');
  console.log('Post', Post);
  return posts;
  // return res.status(200).send({ posts: posts });
}
export default showPosts;
