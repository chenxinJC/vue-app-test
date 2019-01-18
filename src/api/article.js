import axios from 'axios'
import {
  APP_KEY,
  setSign
} from './config'

export function getArticle () {
  const url = 'api/'
  const data = {
    s: 'App.Table.FreeQuery',
    model_name: 'okayapi_article',
    where: JSON.stringify([
      ['id', '>=', '0']
    ]),
    // uuid: '0D567DEAC7DAE319DC63A4FA715AB0F4',
    app_key: APP_KEY
  }
  data.sign = setSign(data)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getArticleDetails (id, uuid) {
  const url = 'api/'
  const data = {
    s: 'App.Table.Get',
    model_name: 'okayapi_article',
    id,
    uuid,
    app_key: APP_KEY
  }
  data.sign = setSign(data)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
