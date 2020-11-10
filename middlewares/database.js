import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import config from '../config';

const middleware = nextConnect();

function database(req, res, next) {
  const isConnected = mongoose.connection.readyState == 1;
  const mongoUrl = config.mongoUrl || 'mongodb://localhost:27017/gamesaver';

  if (!isConnected) {
    mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log('Connected to MongoDB');
    });
  }

  return next();
}

middleware.use(database);

export default middleware;
