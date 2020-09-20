import nextConnect from 'next-connect';
import middleware from '../../../middlewares/database';
import GameController from '../../../controllers/GameController';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  return GameController.get(req, res);
});

handler.post(async (req, res) => {
  return GameController.post(req, res);
});

export default (req, res) => handler.apply(req, res);
