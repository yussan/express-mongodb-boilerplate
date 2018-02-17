import mongodb from 'mongodb'

const db = mongodb.MongoClient
const debug = require('debug')('app:mongo')

export default (req, res, next) => {
  db.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_COLLECTION}`, (err, db) => {
    if(err) 
    {
      debug('[error] to connect mongo')
      debug(err, 'mongo')
      return res.status(500).end('error to connect mongodb')
    }
    debug('[success] connected mongo')
    req.collection = 'boilerplate-express-mongodb'
    next()
  })
}