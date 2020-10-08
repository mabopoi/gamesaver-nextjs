import UserModel from '../models/User';
import bcrypt from 'bcrypt';

function getById(id) {
  const foundUser = UserModel.findById(id);

  return foundUser;
}

function getByEmail(email) {
  const foundUser = UserModel.findOne({ email: email });

  return foundUser;
}

function getByGoogleId(id) {
  const foundUser = UserModel.findOne({ googleID: id });

  return foundUser;
}

async function hashPassword(password, saltRounds = 10) {
  return bcrypt.hash(password, saltRounds).then((hash) => {
    return hash;
  });
}

async function post(data) {
  const { name, email, password, googleID } = data;
  const newUser = new UserModel({
    name,
    email,
    password: (await hashPassword(password)) ?? '',
    googleID: googleID ?? '',
  });

  newUser.save();
}

export default {
  getById,
  getByEmail,
  getByGoogleId,
  post,
};
