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

export function getRole () {
  return localStorage.getItem('currentUser_role')
}

export function setRole (role) {
  return localStorage.setItem('currentUser_role', role)
}

export function removeRole () {
  return localStorage.removeItem('currentUser_role')
}

export function fs (f) {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  let fontSize = htmlWidth / 10
  fontSize = fontSize > 60 ? 60 : fontSize
  return f / 37.5 * fontSize
}
