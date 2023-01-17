import UserQueries from '../db/queries/user/index.js';
import auths from '../src/utils/lib/auth/lib/index.js';
import { errorHandler } from '../src/utils/lib/errors/errorHandling.js';
import { Usertoken } from '../db/models/index.js';

export const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send({ error: true, message: 'Token not found' });
  }
  console.log('token', token);
  const dbToken = await Usertoken.findOne({ token });
  if (!dbToken) {
    return res
      .status(403)
      .send({ error: true, message: 'Token not found in DB' });
  }
  // console.log('expiry date', dbToken);
  const expireSession = auths.verifyExpirySession(dbToken.expiryDate);
  // console.log('expire token session', expireSession);

  // updating token time if user online
  const newTime = new Date();
  newTime.setHours(newTime.getHours() + 1);
  const { _id } = dbToken;
  UserQueries.tokenTimeUpdate({ _id, expiryDate: newTime });

  if (expireSession) {
    // const response = errorHandler('Token is Expired');
    return res.status(401).send({ error: true, message: 'Token Expired' });
  }

  req.user = { userId: dbToken.userId };
  return next();
};
