import Post from '../../../db/models/Post.js';
import PostQueries from '../../../db/queries/post/index.js';
import showPosts from '../../../src/app/posts/showPosts.js';

async function showPostsRoute(req, res, next) {
  // const posts = await PostQueries.findPost({ _id: req.params.id });

  const postData = await showPosts();

  let posts = await Post.find()
    .sort('-createdAt')
    .populate('userId')
    .populate('_id');
  console.log('Post', posts);
  // if (!users) {
  //   return res.status(201).send({ message: 'Not found' });
  // }
  const { userId, ...post } = await postData;
  res.status(200).send({ posts: postData });
  return next();
}
export default showPostsRoute;
