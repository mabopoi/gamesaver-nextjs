import nextConnect from 'next-connect';
import passport from 'passport';
import auth from '../../../../middlewares/auth';

const handler = nextConnect();

handler.use(auth).get(
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

export default (req, res) => handler.apply(req, res);
