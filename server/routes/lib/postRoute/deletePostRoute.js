import PostQueries from '../../../db/queries/index.js';

export const deletePostRoute = async (req, res) => {
  const postId = req.params.id;
  console.log('delete post id', postId);
  const save = await PostQueries.PostQueries.deletePost({postId})
//   const post = await PostQueries.deletePost(postId);
  console.log('post deleted', save);
  return res.status(200).send('post deleted');
};
