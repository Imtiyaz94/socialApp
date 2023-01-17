import User from '../../models/User.js';

export const findByEmail = async (email) => {
  const findByEmail = await User.findOne({ email });
  // console.log('checkMail', findByEmail);

  return findByEmail;
};
