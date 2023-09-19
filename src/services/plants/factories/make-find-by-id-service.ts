import { PlantsRepository } from "@/repositories/prisma/plants-repository";
import { FindByIdPlantService } from "../find-by-id";

export function makeFindByIdPlantService() {
  const plantRepository = new PlantsRepository()
  const service = new FindByIdPlantService(plantRepository)

  return service
}