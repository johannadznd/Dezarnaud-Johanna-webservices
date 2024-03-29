import redis from 'redis'

let redisClient = null

const initializeRedisClient = async () => {
    redisClient = redis.createClient({
        legacyMode:true,
        socket:{
          port:6379,
          host:'redis-cache'
        }
      })
    try {
        // connect to the Redis server
        await redisClient.connect();
        console.log(`🟥 Connected to Redis successfully!`);
    } catch (e) {
        console.error(`Connection to Redis failed with error:`);
        console.error(e);
    }
};

const get = async (redisKey)=>{
    return new Promise(resolve => {
        redisClient.get(redisKey,(err, res) => {
            if (err) console.error(err);
            resolve(res)
        })
    })
}
const set = async (redisKey,value,options)=>{
    return new Promise(resolve => {
        redisClient.set(redisKey,value,options,(err, res) => {
            if (err) console.error(err);
            resolve(res)
        })
    })
}

export {
    initializeRedisClient,
    redisClient,
    get,
    set
}