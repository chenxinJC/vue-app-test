export function getToken () {
  return localStorage.getItem('currentUser_token')
}

export function setToken (token) {
  return localStorage.setItem('currentUser_token', token)
}

export function removeToken () {
  return localStorage.removeItem('currentUser_token')
}

export function getUuid () {
  return localStorage.getItem('currentUser_uuid')
}

export function setUuid (uuid) {
  return localStorage.setItem('currentUser_uuid', uuid)
}

export function removeUuid () {
  return localStorage.removeItem('currentUser_uuid')
}
