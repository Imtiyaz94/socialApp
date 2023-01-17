import UserQueries from '../../../db/queries/user/index.js';

export async function createUser({ value, images }) {
  try {
    const existUser = await UserQueries.existedUser(value.username);
    if (existUser) {
      return { error: true, message: 'User already exists' };
    }
    const checkedMail = await UserQueries.findByEmail(value.email);
    if (checkedMail) {
      return { error: true, message: 'Mail already exists' };
    }
    const userImage = await images;
    console.log('userimage', userImage);
    const newUser = await UserQueries.saveUser(
      {
        ...value,
      },
      userImage,
    );

    const response = {
      error: false,
      message: 'User Created Successfully',
      newUser,
    };
    return response;
  } catch (error) {
    return { error: true, message: error };
  }
}

// module.exports = { createUser };
