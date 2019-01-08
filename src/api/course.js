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
    where: JSON.stringify([['id', '>=', '0']]),
    app_key: APP_KEY
  }
  data.sign = setSign(data)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getCourse () {
  const url = 'api/'
  const data = {
    s: 'App.Table.FreeQuery',
    model_name: 'course',
    where: JSON.stringify([['id', '>=', '0']]),
    app_key: APP_KEY
  }
  data.sign = setSign(data)
  return axios.get(url, {
    params: data
  }).then((res) => {
    console.log(1,res.data)
    return Promise.resolve(res.data)
  })
}

export function getCourseBuyUser (obj) {
  const url = 'api/'
  const data = {
    s: 'App.Table.FreeQuery',
    model_name: 'course_buy_user',
    logic: 'or',
    where: JSON.stringify(obj),
    app_key: APP_KEY
  }
  data.sign = setSign(data)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
