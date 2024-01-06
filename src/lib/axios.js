import axios from 'axios'

export const axiosInterception = axios.create({
  baseURL: 'https://gorest.co.in/public/v2',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
  }
})