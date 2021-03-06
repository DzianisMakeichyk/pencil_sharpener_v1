import _ from 'lodash'
import i18next from 'i18next'

import { locales } from '../../config/i18n'

export const setUiLocale = (locale) => {
  if (!_.find(locales, supported => supported.code === locale)) {
    return Promise.reject(new Error(`Locale ${locale} is not supported.`))
  }

  return fetch(`/static/translations/${locale}.json`)
    .then(response => response.json())
    .then(loadedResources => (
      new Promise((resolve, reject) => {
        i18next.init({
          lng: locale,
          debug: false,
          resources: { [locale]: loadedResources },
          interpolation: {
            format (value) {
              return value
            }
          }
        }, (err) => {
          if (err) {
            reject(err)
            return
          }

          resolve()
        })
      })
    ))
    .catch(err => Promise.reject(err))
}

export const t = (key, opt) => i18next.t(key, opt)

export const currentLocale = () => i18next.language
