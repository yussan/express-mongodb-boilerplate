const db = require('mongodb').MongoClient

module.exports = (req, res, next) => {
  db.connect('mongodb://root:rahasia&boilerplate-express-mongodb:27017', (err, db) => {
    if(err) 
      console.log('error mongodb', err)
      return res.status(500).end('error to connect mongodb')
    req.db = db
    next()
  })
}