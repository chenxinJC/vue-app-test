import request from 'utils/request'
import md5 from 'js-md5'
import {
  APP_KEY,
  getparams
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

export function register (username, password) {
  const data = {
    s: 'App.User.Register',
    app_key: APP_KEY,
    username,
    password: md5(password)
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

export function alterPassword (username, oldPassword, newPassword) {
  const data = {
    s: 'App.User.alterPassword',
    app_key: APP_KEY,
    username,
    old_password: md5(oldPassword),
    new_password: md5(newPassword)
  }
  return request({
    url: 'api/',
    method: 'post',
    data: getparams(data)
  })
}

export function updateExtInfo (uuid, token, userData) {
  const data = {
    s: 'App.User.UpdateExtInfo',
    app_key: APP_KEY,
    ext_info: JSON.stringify(userData),
    uuid,
    token
  }
  return request({
    url: 'api/',
    method: 'post',
    data: getparams(data)
  })
}

export function getUserStatus (uuid, token) {
  const data = {
    s: 'App.User.Check',
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
