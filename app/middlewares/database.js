const db = require('mongodb').MongoClient
const debug = require('debug')('app:mongo')

module.exports = (req, res, next) => {
  db.connect('mongodb://webdev:rahasia@localhost:27017/boilerplate-express-mongodb', (err, db) => {
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