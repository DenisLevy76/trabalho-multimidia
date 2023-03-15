import axios from 'axios';

export const ghostAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/ghost/api/content`,
  params: {
    key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY
  }
})