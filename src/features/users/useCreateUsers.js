import { axiosInterception } from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"

export const useCreateUsers = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInterception.post("/users", data)
    },
    onSuccess,
  })
}
