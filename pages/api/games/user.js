import nextConnect from 'next-connect';
import auth from '../../../middlewares/auth';
import GameController from '../../../controllers/GameController';

const handler = nextConnect();
handler.use(auth);

handler.get(async (req, res) => {
  return GameController.getByUser(req, res);
});

export default handler;
