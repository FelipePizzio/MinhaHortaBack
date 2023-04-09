import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterService } from '../register'
import { InMemoryPlantsRepository } from '@/repositories/in-memory-repositories/in-memory-plants-repository'

let plantsRepository: InMemoryPlantsRepository
let sut: RegisterService

describe('Register Service', () => {
  beforeEach(() => {
    plantsRepository = new InMemoryPlantsRepository()
    sut = new RegisterService(plantsRepository)
  })

  it('should be able to create', async () => {
    const { plant } = await sut.execute({
      name: 'Alface',
    })

    expect(plant.id).toEqual(expect.any(String))
  })
})
