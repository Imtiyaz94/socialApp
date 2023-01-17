import { savePost } from './savePost.js';
import { findPost } from './findPost.js';
import { saveLike } from './saveLike.js';
import { deletePost } from './deletePost.js';

const PostQueries = {};

PostQueries.saveLike = saveLike;
PostQueries.savePost = savePost;
PostQueries.findPost = findPost;
PostQueries.deletePost = deletePost;

export default PostQueries;
