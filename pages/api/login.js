import nextConnect from 'next-connect';
import UserController from '../../controllers/UserController';
import passport from 'passport';
import auth from '../../middlewares/auth';

const handler = nextConnect();

handler.use(auth).post(passport.authenticate('local'), (req, res) => {
  return UserController.login(req, res);
});

export default handler;
