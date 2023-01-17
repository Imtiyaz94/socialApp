import UserQueries from '../../../db/queries/user/index.js';
import showUser from '../../../src/app/users/showUser.js';

async function userDetailsRoute(req, res, next) {
  //   const post = await PostQueries.findPost({ _id: req.params.id });
  const reqUser = req.user.userId;
  console.log('user id ', reqUser);
  const userData = await showUser(reqUser);
  let user = await UserQueries.findById();

  //   const { userId, ...users } = userData;
  return res.status(200).send({ user: userData });
}
export default userDetailsRoute;
