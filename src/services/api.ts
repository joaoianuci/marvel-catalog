import axios from "axios"
import CryptoJS from "crypto-js"

const PRIV_KEY = process.env.NEXT_PUBLIC_PRIV_KEY
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY
const ts = String(Date.now())
const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString()

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    ts,
    hash,
    apikey: PUBLIC_KEY
  }
})

export default api
