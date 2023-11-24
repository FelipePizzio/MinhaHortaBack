import { IPlantsRepository } from '@/repositories/interfaces/interface-plants-repository'
import { Plant } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found'

interface IFindAllPlantsServiceRequest {
  requestedPage: string
}

interface IFindAllPlantsServiceResponse {
  plants: Plant[]
  totalPages: number
  totalResults: number
}

export class FindAllPlantsService {
  constructor(private plantsRepository: IPlantsRepository) {}

  async execute({ requestedPage }: IFindAllPlantsServiceRequest): Promise<IFindAllPlantsServiceResponse> {
    const page = parseInt(requestedPage)
    const pageSize = 20
    const startIndex = (page - 1) * pageSize
    const endIndex = page * pageSize
    
    const plants = await this.plantsRepository.findAll()

    if (!plants) {
      throw new ResourceNotFoundError()
    }

    plants.sort(function(a,b) {
      if(a.name < b.name) return -1
      if(a.name > b.name) return 1
      return 0
    })

    const paginatedPlants = plants.slice(startIndex, endIndex)
    const totalPages = Math.ceil(plants.length / pageSize)

    return { plants:paginatedPlants, totalPages, totalResults: plants.length }
  }
}
