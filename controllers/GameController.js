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

async function patch(req, res) {
  const { body } = req;

  if (body.user && body.moves) {
    const updatedGame = await GameService.patch(body);

    if (updatedGame) {
      res.status(201).json({
        message: 'Game updated',
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

async function eliminate(req, res) {
  const { body } = req;

  if (body._id) {
    const deletedGame = await GameService.eliminate(body);
    if (deletedGame) {
      res.status(201).json({
        message: 'Game deleted',
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
  patch,
  eliminate,
};
