import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newItem => {
  const request = axios.post(baseUrl, newItem)
  return request.then(response => response.data)
}

const remove = id => {
  axios.delete(`${baseUrl}/${id}`)
}

const replace = item => {
  const request = axios.put(`${baseUrl}/${item.id}`, item)
  return request.then(response => response.data)
}

export default { getAll, create, remove, replace }
