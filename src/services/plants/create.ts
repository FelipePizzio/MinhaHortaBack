import { IPlantsRepository } from '@/repositories/interfaces/interface-plants-repository'
import { Plant } from '@prisma/client'

interface ICreateServiceRequest {
  name: string[]
  common_name: string
  scientific_name: string
  synonyms: string[]
  image_url: string
  family_common_name: string 
  genus: string
  family: string
  water_frequency: number
}

interface ICreateServiceResponse {
  plant: Plant
}

export class CreatePlantService {
  constructor(private plantsRepository: IPlantsRepository) {}

  async execute({
    name,
    common_name, 
    scientific_name, 
    synonyms, 
    image_url, 
    family_common_name, 
    genus, 
    family, 
    water_frequency
  }: ICreateServiceRequest): Promise<ICreateServiceResponse> {
    const plant = await this.plantsRepository.create({
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

    return { plant }
  }
}
