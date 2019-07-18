import axios from 'axios'

export function getEng() {
  return axios.get('http://localhost:5000/api/words/list')
}