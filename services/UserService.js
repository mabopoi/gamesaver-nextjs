import UserModel from '../models/User';

function getById(id) {
  const foundUser = UserModel.findById(id);

  return foundUser;
}

function getByGoogleId(id) {
  const foundUser = UserModel.findOne({ googleId: id });

  return foundUser;
}

function post(data) {
  const { name, googleId, twitterId } = data;
  const newUser = new UserModel({
    name,
    googleId: googleId ?? '',
    twitterId: twitterId ?? '',
  });

  newUser.save();
}

export default {
  getById,
  getByGoogleId,
  post,
};
