const twitterApp = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  webhook_env: process.env.WEBHOOK_ENV,
  timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
};

module.exports = {
  twitterApp,
  userName: process.env.USERNAME
};
