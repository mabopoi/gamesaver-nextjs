import nextConnect from 'next-connect';
import passport from 'passport';
import auth from '../../../../middlewares/auth';

const handler = nextConnect();

handler.use(auth);
handler.get(
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

export default (req, res) => handler.apply(req, res);
