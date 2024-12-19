import { useMutation } from '@tanstack/react-query'
import { InferRequestType, InferResponseType } from 'hono'
import { client } from './client'

type ResponseType = InferResponseType<(typeof client.api.auth.login)['$post']>
type RequestType = InferRequestType<(typeof client.api.auth.login)['$post']>

export const useLogin = () => {
  return useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (data) => {
      const response = await client.api.auth.login.$post(data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return await response.json() as Promise<ResponseType>
    },
  })
}
