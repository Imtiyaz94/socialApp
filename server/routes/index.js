import express from 'express';
import { userRoutes, postRoutes } from './lib/index.js';
import { auth } from '../middelwares/auth.js';
import UserQueries from '../db/queries/user/index.js';
import PostQueries from '../db/queries/post/index.js';

const router = express.Router();

// User auth
router.get('/home', auth, userRoutes.homeRoute);
router.post(
  '/register',
  UserQueries.multerUploads.single('profilePic'),
  userRoutes.createUserRoute,
);
router.post('/login', userRoutes.loginUserRoutes);
router.get('/user/:id', auth, userRoutes.userDetailsRoute);

// routes for Post by user
router.post(
  '/create_post',
  auth,
  UserQueries.multerUploads.single('photos'),
  postRoutes.createPostRoute,
);
router.get('/showposts', auth, postRoutes.showPostRoute);
router.delete('/delete_post/:id', auth, postRoutes.deletePostRoute)

// routes for Like by user
router.post('/:id/like', auth, postRoutes.likePost);
router.get('/:id/liked', auth, postRoutes.getLikeUserRoute);
export default router;
