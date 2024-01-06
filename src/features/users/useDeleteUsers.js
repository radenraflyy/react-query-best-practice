import { axiosInterception } from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"

export const useDeleteUsers = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (id) => {
      return await axiosInterception.delete(`/users/${id}`)
    },
    onSuccess,
  })
}
