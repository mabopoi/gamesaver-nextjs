import nextConnect from 'next-connect';
import auth from '../../../middlewares/auth';

const handler = nextConnect();

handler.use(auth);
handler.get((req, res) => {
  req.logout();
  res.status(204).end();
});

export default handler;
