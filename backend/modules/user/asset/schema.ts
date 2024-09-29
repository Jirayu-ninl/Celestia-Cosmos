import { z } from 'zod'

export const addAssetSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  key: z.string(),
  dir: z.string(),
  imageId: z.string(),
  metadata: z.record(z.any()).optional(),
})

export type addAssetInput = z.input<typeof addAssetSchema>
