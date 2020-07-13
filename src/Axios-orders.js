import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://my-project-1495731259843.firebaseio.com/'
})

export default instance
