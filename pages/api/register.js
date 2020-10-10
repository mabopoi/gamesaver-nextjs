import nextConnect from 'next-connect';
import UserController from '../../controllers/UserController';
import database from '../../middlewares/database';

const handler = nextConnect();
handler.use(database);
handler.post(async (req, res) => {
  const user = await UserController.getByEmail(req, res);

  if (user) {
    return res.status(202).json({
      message: 'This email already has an account',
    });
  } else {
    return UserController.post(req, res);
  }
});

export default handler;
