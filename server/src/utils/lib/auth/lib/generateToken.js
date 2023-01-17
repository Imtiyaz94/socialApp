import jwt from 'jsonwebtoken';
import UserQueries from '../../../../../db/queries/user/index.js';

export const generateAuthToken = async (checkUser) => {
  const { _id } = checkUser;
  const userId = checkUser;
  // console.log('payload', _id);
  const accessToken = await jwt.sign({ _id }, process.env.PRIVATE_KEY);
  const expiredAt = new Date();
  const time = expiredAt.setSeconds(expiredAt.getSeconds() + 300); // 1800sec = 30min
  const newToken = await UserQueries.saveToken({
    accessToken,
    userId,
    expiryDate: time,
  });
  return {
    error: false,
    message: 'token is created',
    isDelete: true,
    token: newToken.token,
    userId: userId._id,
  };
};

export default generateAuthToken;
// "quotes":[1, 'single', {'avoidEscape':true}],
