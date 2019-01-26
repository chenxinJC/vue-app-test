import request from 'utils/request'
import axios from 'axios'
import {
  APP_KEY,
  setSign,
  getparams
} from './config'
import store from 'store'

export function commontPost (messageContent) {
  let data = {
    s: 'App.Market_Message.Post',
    app_key: APP_KEY,
    message_content: messageContent
  }
  }
  data.sign = setSign(data)
  return axios.get('api/', {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}