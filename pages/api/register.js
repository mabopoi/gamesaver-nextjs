import nextConnect from 'next-connect';
import UserController from '../../controllers/UserController';
import database from '../../middlewares/database';

const handler = nextConnect();
handler.use(database);
handler.post(async (req, res) => {
  return UserController.post(req, res);
});

export default handler;
