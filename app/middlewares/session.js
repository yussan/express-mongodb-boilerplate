import session from 'express-session'

export default session({
  secret: '1234qwer!@#$',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true,
    // expires in 1 day as miliseconds
    expires: 86400000
  }
})