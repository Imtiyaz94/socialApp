import { Usertoken } from '../../models/index.js';

export const findById = async (id) => {
  const findById = await Usertoken.findOne({ _id: id });
  console.log('checkMail', findById);

  return findById;
};
