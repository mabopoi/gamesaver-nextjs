import nextConnect from 'next-connect';
import auth from '../../../middlewares/auth';

const handler = nextConnect();

handler.use(auth);
handler.get((req, res) => {
  console.log(req.cookies);
  console.log(req.session); //empty object
  console.log(req.user); //undefined
  req.logOut();
  res.status(204).end();
});

export default handler;
