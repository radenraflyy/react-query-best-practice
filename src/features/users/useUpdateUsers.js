import { axiosInterception } from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"

export const useUpdateUsers = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (body) => {
      return await axiosInterception.put(`/users/${body.id}`, body)
    },
    onSuccess,
  })
}
