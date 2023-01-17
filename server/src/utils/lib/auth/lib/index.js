import { encrypt } from './encrypt.js';
import { checkPassword } from './checkPassword.js';
import { generateAuthToken } from './generateToken.js';
import { verifyUser } from './verifyUser.js';
import { verifyExpirySession } from './verifyExpirySession.js';

const auths = {};

auths.encrypt = encrypt;
auths.checkPassword = checkPassword;
auths.generateAuthToken = generateAuthToken;
auths.verifyUser = verifyUser;
auths.verifyExpirySession = verifyExpirySession;

export default auths;
