import GameModel from '../models/Game';

function get() {
  const games = GameModel.find().exec();

  return games;
}

function post(data) {
  const { user, moves, opponent, date, userColor, result } = data;
  const newGame = new GameModel({
    user,
    moves,
    opponent,
    date: date ?? '',
    userColor,
    result,
  });

  return newGame.save();
}
export default {
  get,
  post,
};
