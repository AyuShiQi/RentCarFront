import Axios from 'axios'

const instance = Axios.create({
    baseURL: '127.0.0.1:8000',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
  });