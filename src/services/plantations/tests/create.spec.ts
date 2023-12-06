import { expect, describe, it, beforeEach } from 'vitest'
import { CreatePlantationService } from '../create'
import { InMemoryUsersRepository } from '@/repositories/in-memory-repositories/in-memory-users-repository'
import { InMemoryPlantationsRepository } from '@/repositories/in-memory-repositories/in-memory-plantations-repository'
import { InMemoryPlantsRepository } from '@/repositories/in-memory-repositories/in-memory-plants-repository'
import { InMemoryTasksRepository } from '@/repositories/in-memory-repositories/in-memory-tasks-repository'
import { hash } from 'bcryptjs'

let usersRepository: InMemoryUsersRepository
let plantationRepository: InMemoryPlantationsRepository
let plantsRepository: InMemoryPlantsRepository
let tasksRepository: InMemoryTasksRepository
let sut: CreatePlantationService

describe('Register Service', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    plantationRepository = new InMemoryPlantationsRepository()
    plantsRepository = new InMemoryPlantsRepository()
    tasksRepository = new InMemoryTasksRepository()
    sut = new CreatePlantationService(plantationRepository, usersRepository, plantsRepository, tasksRepository)
  })

  it('should be able to create', async () => {
    const user = await usersRepository.create({
      name: 'Fulano',
      email: 'fulano@email.com',
      password_hash: await hash('123456', 6),
      created_at: new Date(),
    })

    const plant = await plantsRepository.create({
      id: 'plant-1',
      name: ['plant-1'],
      common_name: 'plant-1',
      scientific_name: 'plant-1',
      synonyms: ['plant-1'],
      image_url: '',
      family_common_name: 'plant-1',
      genus: 'plant-1',
      family: 'plant-1',
      water_frequency: 1,
      tasks: ['Regar'],
    })

    const { plantation } = await sut.execute({
      name: 'Plantation-1',
      plantId: plant.id,
      userId: user.id,
    })

    expect(plantation.id).toEqual(expect.any(String))
  })
})
