import nextConnect from 'next-connect';
import auth from '../../../middlewares/auth';

const handler = nextConnect();

handler.use(auth);
handler.get((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default (req, res) => handler.apply(req, res);
