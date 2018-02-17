import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  // render and set params
  return res.render('index', { 
    title: 'Express MongoDB Boilerplate by yussan',
    language: req.session.language || 'en-us' 
  })
})

// SET LANGUAGE
router.get('/set-language/:lang', (req, res, next) => {
  // set session language
  const { lang } = req.params
  // if language support, set
  if(['en-us', 'id-id'].includes(lang))
  {
    req.session.language = lang
  }
  // back to url reference
  return res.redirect('/')
})

export default router
