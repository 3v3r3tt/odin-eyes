import { authHeader } from '../_helpers'

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
  contact
}

function contact(email, subject, body) {
  console.log('CONTACT: send an email with: ', email, subject, body)
  //TODO: hook this up to email server
  return new Promise ((resolve, reject) => setTimeout(resolve, 300, email))
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  }

  return fetch(`http://localhost:4000/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
      }

      return user
    })
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`http://localhost:4000/users`, requestOptions).then(handleResponse)
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`http://localhost:4000/users/${id}`, requestOptions).then(handleResponse)
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return fetch(`http://localhost:4000/users/register`, requestOptions).then(handleResponse)
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return fetch(`http://localhost:4000/users/${user.id}`, requestOptions).then(handleResponse)
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }

  return fetch(`http://localhost:4000/users/${id}`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        window.location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
