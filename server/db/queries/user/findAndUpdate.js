import User from '../../models/User.js';

export const findAndUpdate = async ({ id, obj }) => {
  const findAndUpdate = await User.findOneAndUpdate(id, obj);
  console.log('user', findAndUpdate);
  return findAndUpdate;
};
