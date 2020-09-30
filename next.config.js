const dotenv = require('dotenv');
const path = require('path');
const Dotenv = require('dotenv-webpack');

dotenv.config();

module.exports = {
  async redirects() {
    return [
      {
        source: '/api/auth/google/redirect',
        destination: '/',
        permanent: false,
      },
    ];
  },
  env: { EXAMPLE: 'helloWorld' }, //solves environment var on client side problem
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.node = {
      fs: 'empty', //solves 'fs not found' problem
    };
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
};
