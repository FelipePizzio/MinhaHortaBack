import { makeGetAllTasksService } from "@/services/tasks/factories/make-find-all-service";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listTasks(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  
  const getListTasksService = makeGetAllTasksService() 

  const { tasks } = await getListTasksService.execute({})

  return reply.status(200).send({ tasks })
}