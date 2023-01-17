import User from '../../models/User.js';

export const findAll = async (username) => {
  const findAll = await User.find().select('-password');
  // console.log('All Users', findAll);
  return findAll;
};
