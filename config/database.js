const mongoose = require('mongoose');
const redis = require('redis');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});

module.exports = { mongoose, redisClient };
