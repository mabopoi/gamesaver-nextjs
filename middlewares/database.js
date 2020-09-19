import mongoose from 'mongoose';
import nextConnect from 'next-connect';

const middleware = nextConnect();

function database(req, res, next) {
  const isConnected = mongoose.connection.readyState == 1;

  if (!isConnected) {
    mongoose.connect('mongodb://localhost:27017/gamesaver', {
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
