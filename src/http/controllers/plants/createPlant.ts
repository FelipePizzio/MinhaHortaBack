import { makeCreatePlantService } from '@/services/plants/factories/make-create-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createPlant(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const bodySchema = z.object({
    name: z.string().array(),
    common_name: z.string(),
    scientific_name: z.string(),
    synonyms: z.string().array(),
    image_url: z.string(),
    family_common_name: z.string(),
    genus: z.string(),
    family: z.string(),
    water_frequency: z.number()
  })

  const { 
    name, 
    common_name, 
    scientific_name,
    synonyms, 
    image_url, 
    family_common_name, 
    genus, 
    family, 
    water_frequency 
  } = bodySchema.parse(request.body)

  const service = makeCreatePlantService()

  await service.execute({ 
    name, 
    common_name, 
    scientific_name, 
    synonyms, 
    image_url, 
    family_common_name, 
    genus, 
    family, 
    water_frequency 
  })

  return reply.status(201).send()
}
