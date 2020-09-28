import UserModel from '../models/User';

function getById(id) {
  const foundUser = UserModel.findById(id);

  return foundUser;
}

function getByGoogleId(id) {
  const foundUser = UserModel.findOne({ googleID: id });

  return foundUser;
}

function post(data) {
  const { name, googleID, twitterID } = data;
  const newUser = new UserModel({
    name,
    googleID: googleID ?? '',
    twitterID: twitterID ?? '',
  });

  newUser.save();
}

export default {
  getById,
  getByGoogleId,
  post,
};
