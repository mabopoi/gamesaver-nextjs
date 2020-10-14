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

function patch(body) {
  const { _id, user, moves, opponent, date, userColor, result } = body;
  const updatedData = { user, moves, opponent, date, userColor, result };

  const updatedGame = GameModel.findByIdAndUpdate(_id, updatedData, {
    new: true,
  });

  return updatedGame;
}

function eliminate(body) {
  const { _id } = body;
  const deletedGame = GameModel.findOneAndDelete(_id);

  return deletedGame;
}

export default {
  get,
  post,
  patch,
  eliminate,
};
