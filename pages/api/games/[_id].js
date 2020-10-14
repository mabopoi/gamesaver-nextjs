import nextConnect from 'next-connect';
import database from '../../../middlewares/database';
import GameController from '../../../controllers/GameController';

const handler = nextConnect();
handler.use(database);

handler.patch(async (req, res) => {
  return GameController.patch(req, res);
});

handler.delete(async (req, res) => {
  return GameController.eliminate(req, res);
});

export default (req, res) => handler.apply(req, res);
