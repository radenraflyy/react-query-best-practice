import React, { use } from "react"
import { Tr, Td, Button } from "@chakra-ui/react"

export default function TbodyC({
  data,
  deleteProduct,
  isLoading,
  handleUpdate,
}) {
  return data?.data.map((user) => {
    return (
      <Tr key={user.id}>
        <Td>{user.id}</Td>
        <Td>{user.name}</Td>
        <Td>{user.email}</Td>
        <Td>{user.gender}</Td>
        <Td>
          <Button
            disabled={isLoading}
            onClick={() => handleUpdate(user)}
            colorScheme="blue"
          >
            {isLoading ? "Loading..." : "Edit"}
          </Button>
        </Td>
        <Td>
          <Button
            disabled={isLoading}
            onClick={() => deleteProduct(user.id)}
            colorScheme="red"
          >
            {isLoading ? "Loading..." : "Delete"}
          </Button>
        </Td>
      </Tr>
    )
  })
}
