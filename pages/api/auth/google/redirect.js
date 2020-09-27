import nextConnect from 'next-connect';
import passport from 'passport';
import auth from '../../../../middlewares/auth';

const handler = nextConnect();

handler.use(auth);
handler.get(
  passport.authenticate('google', (req, res) => {
    res.send(req.user);
  })
);

export default (req, res) => handler.apply(req, res);
