import User from '../../models/User.js';

export const existedUser = async (username) => {
  const findUser = await User.findOne({ username });
  console.log('user', username);
  return findUser;
};
