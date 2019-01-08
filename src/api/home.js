import axios from 'axios'
import {
  APP_KEY,
  setSign
} from './config'

export function getBanner () {
  const url = 'api/'
  const data = {
    s: 'App.Table.FreeQuery',
    model_name: 'home_banner',
    where: JSON.stringify([
      ['id', '>', '0']
    ]),
    app_key: APP_KEY
  }
  data.sign = setSign(data)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getQuickAccess () {
  const url = 'api/'
  const data = {
    s: 'App.Table.FreeQuery',
    model_name: 'home_quickAccess',
    where: JSON.stringify([
      ['id', '>', '0']
    ]),
    app_key: APP_KEY
  }
  data.sign = setSign(data)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getRecommend () {
  const url = 'api/'
  const data = {
    s: 'App.Table.FreeQuery',
    model_name: 'home_quickAccess',
    where: JSON.stringify([
      ['id', '>=', '0']
    ]),
    app_key: APP_KEY
  }
  data.sign = setSign(data)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
