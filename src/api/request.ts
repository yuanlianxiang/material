import axios from "axios"

const request = axios.create({
  baseURL: "",
  timeout: 5000
})

request.interceptors.request.use(
  config => {
    config.headers = {
      "Content-Type": "application/json;charset=utf-8"
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const { data } = response
    if (data.code === 200 || data.code === 0) {
      return data
    } else {
      return Promise.reject(new Error(data))
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default request