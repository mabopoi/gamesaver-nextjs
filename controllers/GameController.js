import GameService from '../services/GameService';

async function get(req, res) {
  const games = await GameService.get();

  return res.json(games);
}

async function post(req, res) {
  const { body } = req;

  if (body.user && body.moves) {
    const postGame = await GameService.post(body);

    if (postGame) {
      res.status(201).json({
        message: 'Game created',
      });
    } else {
      res.status(500).json({
        message: 'Server error',
      });
    }
  } else {
    res.status(400).json({
      message: 'Bad request',
    });
  }
}

export default {
  get,
  post,
};
