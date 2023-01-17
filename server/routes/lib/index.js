// Home Routes here
import { homeRoute } from './homeRoute.js';

// User Routes here
import loginUserRoutes from './usersRoute/loginUserRoutes.js';
import userDetailsRoute from './usersRoute/userDetailsRoute.js';
import createUserRoute from './usersRoute/createUserRoute.js';


// Post and Like Route here
import { createPostRoute } from './postRoute/createPostRoute.js';
import { likePost } from './postRoute/likeRoute.js';
import showPostRoute from './postRoute/showPostRoute.js';
import { getLikeUserRoute } from './postRoute/getLikedUserRoute.js';
import { deletePostRoute } from './postRoute/deletePostRoute.js';

const postRoutes = {
  createPostRoute,
  likePost,
  showPostRoute,
  getLikeUserRoute,
  deletePostRoute
};

const userRoutes = {
  createUserRoute,
  loginUserRoutes,
  homeRoute,
  userDetailsRoute,
};

export { postRoutes, userRoutes };
