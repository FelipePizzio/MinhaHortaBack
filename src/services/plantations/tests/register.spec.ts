import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterService } from '../register'
import { InMemoryUsersRepository } from '@/repositories/in-memory-repositories/in-memory-users-repository'
import { InMemoryPlantationsRepository } from '@/repositories/in-memory-repositories/in-memory-plantations-repository'
import { InMemoryPlantsRepository } from '@/repositories/in-memory-repositories/in-memory-plants-repository'
import { hash } from 'bcryptjs'

let usersRepository: InMemoryUsersRepository
let plantationRepository: InMemoryPlantationsRepository
let plantsRepository: InMemoryPlantsRepository
let sut: RegisterService

describe('Register Service', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    plantationRepository = new InMemoryPlantationsRepository()
    plantsRepository = new InMemoryPlantsRepository()
    sut = new RegisterService(plantationRepository, usersRepository)
  })

  it('should be able to create', async () => {
    const user = await usersRepository.create({
      name: 'Fulano',
      email: 'fulano@email.com',
      password_hash: await hash('123456', 6),
      created_at: new Date(),
      plantations: [],
    })

    const plant = await plantsRepository.create({
      name: 'Alface',
    })

    const { plantation } = await sut.execute({
      name: 'Plantation-1',
      plantId: plant.id,
      userId: user.id,
    })

    expect(plantation.id).toEqual(expect.any(String))
  })
})
