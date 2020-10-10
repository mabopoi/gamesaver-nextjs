import UserModel from '../models/User';
import { hashPassword } from '../utils/hashPassword';

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

async function post(data) {
  const { name, email, password, googleID } = data;
  const newUser = new UserModel({
    name,
    email,
    password: (await hashPassword(password)) ?? '',
    googleID: googleID ?? '',
  });

  return newUser.save();
}

export default {
  getById,
  getByEmail,
  getByGoogleId,
  post,
};
