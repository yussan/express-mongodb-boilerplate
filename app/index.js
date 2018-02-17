import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import dbconnect from './middlewares/database'
import session from './middlewares/session'
import language from './middlewares/language'

// routes
import index from './routes'

// express declaration
const app = express()

// database connect
app.use(dbconnect)

// enable session
app.use(session)

// enable i18n
app.use(language)

// global middlewares
app.use((req, res, next) => {
  if(!req.session.language) req.session.language = 'en-us'
  next()
})

// view engine setup
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

// routes declaration
app.use('/', index)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app