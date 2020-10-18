import GameModel from '../models/Game';

function get() {
  const games = GameModel.find().limit(5).exec();

  return games;
}

function getByUser(userId) {
  const userGames = GameModel.find({ user: userId }).exec();
  return userGames;
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

function patch(data) {
  const { _id, user, moves, opponent, date, userColor, result } = data;
  const updatedData = { user, moves, opponent, date, userColor, result };

  const updatedGame = GameModel.findByIdAndUpdate(_id, updatedData, {
    new: true,
    useFindAndModify: false, // deprecated without this option
  });

  return updatedGame;
}

function eliminate(data) {
  const { _id } = data;
  const deletedGame = GameModel.findOneAndDelete(_id, {
    useFindAndModify: false,
  });

  return deletedGame;
}

export default {
  get,
  getByUser,
  post,
  patch,
  eliminate,
};
