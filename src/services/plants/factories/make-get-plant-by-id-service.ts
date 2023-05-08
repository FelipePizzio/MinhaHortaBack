import { PlantsRepository } from "@/repositories/prisma/plants-repository";
import { GetPlantByIdService } from "../get-plant-by-id";

export function makeGetPlantByIdService() {
  const plantRepository = new PlantsRepository()
  const service = new GetPlantByIdService(plantRepository)

  return service
}