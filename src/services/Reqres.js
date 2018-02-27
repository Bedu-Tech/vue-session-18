import axios from 'axios'

/**
 * Authentication
 * @param user String
 * @param password String
 * @return AxiosPromise
 */
export const getLogin = (user, password) => {
  return axios.post(`${process.env.API}/login`, {
    email: user,
    password
  })
}

/**
 * Get all users
 * @return AxiosPromise
 */
export const getUsers = () => {
  return axios.get(`${process.env.API}/users`)
}

export const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  return (token)
}
