import axios from 'axios'

export default function () {
  const port = process.env.ServerPort
  console.log(port)
  return axios.create({
    // baseURL: 'http://54.237.168.141:8081'
    baseURL: 'http://localhost:8081'
  })
}
