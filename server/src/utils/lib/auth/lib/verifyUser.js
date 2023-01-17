import { errorHandler } from '../../errors/index.js';
import { auth } from '../../../../../middelwares/auth.js';
export const verifyUser = async (req, res, next) => {
  auth(req, res, next, () => {
    if (req.user.id === req.params.id) {
      //   next();
      return errorHandler(200, 'You are authorized');
    }
    return errorHandler(401, 'You are not authorized');
  });
};
