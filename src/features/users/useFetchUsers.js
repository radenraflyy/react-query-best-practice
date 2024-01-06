import { useQuery } from "@tanstack/react-query"
import { axiosInterception } from "@/lib/axios"

export const useFetchUsers = ({ onError }) => {
  return useQuery({
    queryFn: async () => {
      return await axiosInterception.get("/users")
    },
    onError,
  })
}
