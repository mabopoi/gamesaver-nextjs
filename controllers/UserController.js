import UserService from '../services/UserService';

async function getByEmail(req, res) {
  const user = await UserService.getByEmail(req.body.email);

  return user;
}

async function post(req, res) {
  const { body } = req;

  if (body.name && body.password && body.email) {
    const postUser = await UserService.post(body);

    if (postUser) {
      res.status(201).json({
        message: 'User created',
      });
    } else {
      res.status(500).json({
        message: 'Server error',
      });
    }
  } else {
    res.status(400).json({
      message: 'Bad request',
    });
  }
}

async function login(req, res) {
  if (req.user) {
    res.status(200).json({
      message: 'OK',
    });
  } else {
    res.status(202).json({
      message: "Email and password don't match",
    });
  }
}

export default {
  getByEmail,
  post,
  login,
};
