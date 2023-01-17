import { Usertoken } from '../../models/index.js';

export const saveToken = async (value) => {
  const token = await Usertoken.create({
    token: value.accessToken,
    userId: value.userId,
    expiryDate: value.expiryDate,
  });
  return token;
};
