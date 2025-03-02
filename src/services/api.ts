import axios from 'axios'

const API_KEY = process.env.API_KEY as string

export const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${API_KEY}`,
  },
})
