import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const gameSchema = new Schema({
  user: {
    // type: Schema.ObjectId,
    // required: true,
    // ref: 'user',
    type: String,
    required: true,
  },
  opponent: {
    type: String,
    required: true,
  },
  moves: {
    type: String,
    required: true,
  },
  date: String,
  userColor: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
});

export default mongoose.models && mongoose.models.games
  ? mongoose.models.games
  : mongoose.model('games', gameSchema);
// This solves model overwriting problem
