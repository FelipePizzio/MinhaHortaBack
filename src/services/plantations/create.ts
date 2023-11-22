import { IPlantationsRepository } from '@/repositories/interfaces/interface-plantations-repository'
import { IUsersRepository } from '@/repositories/interfaces/interface-users-repository'
import { Plantation } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found'
import { IPlantsRepository } from '@/repositories/interfaces/interface-plants-repository'
import { ITasksRepository } from '@/repositories/interfaces/interface-tasks-repository'
import axios from 'axios'
import moment from 'moment'

interface ICreatePlantationServiceRequest {
  name: string
  plantId: string
  userId: string
}

interface ICreatePlantationServiceResponse {
  plantation: Plantation
}

export class CreatePlantationService {
  constructor(
    private plantationRepository: IPlantationsRepository,
    private usersRepository: IUsersRepository,
    private plantsRepository: IPlantsRepository,
    private tasksRepository: ITasksRepository,
  ) {}

  async execute({
    name,
    plantId,
    userId
  }: ICreatePlantationServiceRequest): Promise<ICreatePlantationServiceResponse> {
    const user = await this.usersRepository.findById(userId)
    const plant = await this.plantsRepository.findById(plantId)

    if (!user || !plant) {
      throw new ResourceNotFoundError()
    }

    const plantation = await this.plantationRepository.create({
      name,
      plantId,
      userId,
      image: plant.image_url,
      water: (Math.floor(Math.random() * 3) + 1) * 100
    })

    const weather = await axios.get(
      'http://api.hgbrasil.com/weather?key=9d68da9a&user_ip=remote',
    )
    const forecast = weather.data.results.forecast
    console.log('forecast', forecast)

    for(let i = 0; i < forecast.length; i += plant.water_frequency ) {
      const date = moment()
      date.add(i, 'days')
      if(forecast[i].condition != 'rain') {
        await this.tasksRepository.create({
          name: plant.tasks[0],
          userId,
          plantationId: plantation.id,
          created_at: date.format()
        })
      }
    }

    return { plantation }
  }
}
