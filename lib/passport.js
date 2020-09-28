import passport from 'passport';
import UserService from '../services/UserService';
import { config } from '../config';

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await UserService.getById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: `${config.googleClientID}`,
      clientSecret: `${config.googleClientSecret}`,
      callbackURL: 'http://localhost:3000/api/auth/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      const foundUser = await UserService.getByGoogleId(profile.id);
      if (foundUser) {
        done(null, foundUser);
      } else {
        const newUser = await UserService.post({
          googleID: profile.id,
          name: profile.displayName,
        });
        done(null, newUser);
      }
    }
  )
);

export default passport;
