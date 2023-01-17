import { User } from '../../../db/models/index.js';

async function showUser(userId ) {
  let user = await User.findOne({ _id: userId });

  console.log('userpost', user);
  return user;
  // next();
}
export default showUser ;
