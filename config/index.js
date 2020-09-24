require('dotenv').config();

const config = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  cookieSecret: process.env.COOKIE_SECRET,
};

export default config;
