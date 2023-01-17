import Joi from 'joi';
import { authenticate } from '../../../src/utils/lib/auth/index.js';
import { errorHandler } from '../../../src/utils/lib/errors/errorHandling.js';

const schema = Joi.object({
  email: Joi.string().email().required().label('Email'),
  password: Joi.string().required().label('Password'),
});
// return schema.validate(data);

const loginUserRoutes = async (req, res) => {
  try {
    const { error, value } = schema.validate(req.body);
    console.log('value', value.email);
    if (error) {
      return res.status(400).send({ message: error.message });
    }
    const checkAuth = await authenticate(value);
    if (checkAuth.error) {
      const resp = errorHandler(checkAuth.message);
      return res.status(401).send(resp);
    }
    const response = {
      error: false,
      token: checkAuth.accessToken,
    };
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(400).send('Internal Server Error', error);
  }
};
export default loginUserRoutes;
