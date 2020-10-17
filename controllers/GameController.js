import GameService from '../services/GameService';

async function get(req, res) {
  const games = await GameService.get();

  return res.json(games);
}

async function getByUser(req, res) {
  const { user } = req;

  if (user) {
    const userGames = await GameService.getByUser(user._id);

    if (userGames.length !== 0) {
      return res.json(userGames);
    } else {
      return res.status(200).json({
        message: "You don't have any games yet",
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    });
  }
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
  const { query } = req;

  if (query._id) {
    const deletedGame = await GameService.eliminate(query);
    if (deletedGame) {
      res.status(200).json({
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
  getByUser,
  post,
  patch,
  eliminate,
};
