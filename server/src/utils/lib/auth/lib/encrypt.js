import bcrypt from 'bcryptjs';

export const encrypt = async (password) => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
