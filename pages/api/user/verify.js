import nextConnect from 'next-connect';
import auth from '../../../middlewares/auth';

const handler = nextConnect();

handler.use(auth).get((req, res) => {
  const user = req.user ?? {};
  return res.status(200).json(user);
});

export default handler;
