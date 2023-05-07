import { FastifyInstance } from 'fastify'
import { register as registerUser } from './controllers/users/register'
import { register as registerPlant } from './controllers/plants/register'
import { register as registerPlantation } from './controllers/plantations/register'
import { authenticate } from './controllers/users/authenticate'
import { profile } from './controllers/users/profile'
import { verifyJWT } from './middlewares/verify-jwt'
import { refresh } from './controllers/users/refresh'
import { listPlantations } from './controllers/plantations/listPlantations'
import { listPlants } from './controllers/plants/listPlants'

export async function appRoutes(app: FastifyInstance) {
  /** User */
  app.post('/users', registerUser)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
  app.post('/plantation', { onRequest: [verifyJWT] }, registerPlantation)
  app.get('/plantations', { onRequest: [verifyJWT] }, listPlantations)

  /** Plant */
  app.post('/plant', registerPlant)
  app.get('/plant', listPlants)
}
