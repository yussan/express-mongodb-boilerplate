import path from 'path'
import i18n from 'i18n-express'

export default i18n({
  translationsPath: path.join(__dirname, '../../resources/language'),
  siteLangs: ['en-us','id-id'],
  textsVarName: 'translation',
  cookieLangName: 'language',
  defaultLang: 'en-us'
})