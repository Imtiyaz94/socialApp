import { createLike } from '../../../src/app/posts/index.js';
import { errorHandler } from '../../../src/utils/lib/errors/errorHandling.js';

export const likePost = async (req, res) => {
  try {
    const postId = await req.params.id;
    console.log('post id', postId);
    // const userId = await findUser(req.user.id);
    const { userId } = req.user;
    // console.log('like user id', userId);

    const like = await createLike({ postId, userId });
    return res.status(200).send(like);
  } catch (error) {
    console.log(error, 'error');
    const response = errorHandler(402, error);
    return res.status(400).send(response);
  }
};
