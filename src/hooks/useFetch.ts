import useSWR from "swr"
import api from "../services/api"

export function useFetch<Data = any, Error = any>(
  url: string,
  params: object = {}
) {
  const { data, error, isValidating } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url, {
        params
      })
      return response.data
    }
  )

  return { data, error, isValidating }
}
