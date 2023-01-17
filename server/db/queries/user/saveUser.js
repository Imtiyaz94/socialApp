import { User } from '../../models/index.js';
import auths from '../../../src/utils/lib/auth/lib/index.js';
const saveUser = async (value, userImage) => {
  const hashPassword = await auths.encrypt(value.password);
  const newUser = await User.create({
    username: value.username,
    email: value.email,
    password: hashPassword,
    gender: value.gender,
    profilePic: userImage,
  });
  console.log('new user', newUser);
  return newUser;
};

export { saveUser };
