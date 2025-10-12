/* global process */

import { createClient } from 'redis';

let redis;

async function getRedisClient() {
  if (!redis) {
    redis = createClient({ url: process.env.REDIS_STORAGE_REDIS_URL });
    await redis.connect();
  }
  return redis;
}

export default async function handler(req, res) {
  try {
    const client = await getRedisClient();
    const totalLikes = await client.get('portfolio_likes');
    res.status(200).json({ totalLikes: parseInt(totalLikes || 0) });
  } catch (err) {
    console.error('Redis error:', err);
    res.status(500).json({ error: 'Redis error' });
  }
}
