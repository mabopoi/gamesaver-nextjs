import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: String,
  googleID: String,
  twitterID: String,
});

export default mongoose.models && mongoose.models.users
  ? mongoose.models.users
  : mongoose.model('users', userSchema);
