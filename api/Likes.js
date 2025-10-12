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
  if (req.method === 'POST') {
    try {
      const client = await getRedisClient();
      await client.incr('portfolio_likes'); // increment counter
      const totalLikes = await client.get('portfolio_likes');
      res.status(200).json({ success: true, totalLikes });
    } catch (err) {
      console.error('Redis error:', err);
      res.status(500).json({ success: false, error: 'Redis error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
