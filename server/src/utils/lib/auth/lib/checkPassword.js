import bcrypt from 'bcryptjs';

export const checkPassword = async (password, conPassword) => {
  // hashing password from db then validating password

  console.log('check password ', password, conPassword);
  const checkPassword = await bcrypt.compare(password, conPassword);
  return checkPassword;
};
