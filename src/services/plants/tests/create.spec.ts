import { expect, describe, it, beforeEach } from 'vitest'
import { CreatePlantService } from '../create'
import { InMemoryPlantsRepository } from '@/repositories/in-memory-repositories/in-memory-plants-repository'

let plantsRepository: InMemoryPlantsRepository
let sut: CreatePlantService

describe('Register Service', () => {
  beforeEach(() => {
    plantsRepository = new InMemoryPlantsRepository()
    sut = new CreatePlantService(plantsRepository)
  })

  it('should be able to create', async () => {
    const { plant } = await sut.execute({
      name: ['plant-1'],
      common_name: 'plant-1',
      scientific_name: 'plant-1',
      synonyms: ['plant-1'],
      image_url: '',
      family_common_name: 'plant-1',
      genus: 'plant-1',
      family: 'plant-1',
      water_frequency: 1,
    })

    expect(plant.id).toEqual(expect.any(String))
  })
})
