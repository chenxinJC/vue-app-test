import request from 'utils/request'
import {
  APP_KEY,
  setSign
} from './config'

export function login (username, password) {
  const data = {
    s: 'App.User.Login',
    app_key: APP_KEY,
    username,
    password
  }
  return request({
    url: 'api/',
    method: 'post',
    data: getparams(data)
  })
}

export function getUserInfo (uuid, token) {
  const data = {
    s: 'App.User.Profile',
    app_key: APP_KEY,
    uuid,
    token
  }
  return request({
    url: 'api/',
    method: 'post',
    data: getparams(data)
  })
}

export function getparams (data) {
  data.sign = setSign(data)
  let params = new URLSearchParams()
  for (let k in data) {
    params.append(k, data[k])
  }
  return params
}
