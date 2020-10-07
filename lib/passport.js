import passport from 'passport';
import UserService from '../services/UserService';
import { config } from '../config';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (id, done) => {
  const user = await UserService.getByEmail(id);
  done(null, user);
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
      const user = await UserService.getByEmail(email);
      bcrypt.compare(password, user.password).then((result) => {
        if (user && result) {
          done(null, user);
        } else {
          done(null, null);
        }
      });
    }
  )
);

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
          email: profile.email,
        });
        done(null, newUser);
      }
    }
  )
);

export default passport;
