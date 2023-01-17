import { Usertoken } from '../../models/index.js';

export const tokenTimeUpdate = async ({ _id, expiryDate }) => {
  const token = await Usertoken.findByIdAndUpdate({ _id }, {expiryDate:expiryDate});
  return token;
};
