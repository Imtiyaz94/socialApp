import { existedUser } from './findOne.js';
import { saveUser } from './saveUser.js';
import { findByEmail } from './findByEmail.js';
import { saveToken } from './saveToken.js';
import { findAll } from './findAll.js';
import { findById } from './fintById.js';
import { findUser } from './findUser.js';
import { findAndUpdate } from './findAndUpdate.js';
import { tokenTimeUpdate } from './tokenTimeUpdate.js';

const UserQueries = {};

UserQueries.existedUser = existedUser;
UserQueries.saveUser = saveUser;
UserQueries.findByEmail = findByEmail;
UserQueries.saveToken = saveToken;
UserQueries.findAll = findAll;
UserQueries.findById = findById;
UserQueries.findUser = findUser;
UserQueries.findAndUpdate = findAndUpdate;
UserQueries.tokenTimeUpdate = tokenTimeUpdate;

export default UserQueries;
