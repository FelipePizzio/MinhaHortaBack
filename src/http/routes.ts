import { FastifyInstance } from 'fastify'
import { registerUser } from './controllers/users/registerUser'
import { registerPlant } from './controllers/plants/registerPlant'
import { registerPlantation } from './controllers/plantations/registerPlantation'
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

  app.post('/create-plantation', { onRequest: [verifyJWT] }, registerPlantation)
  app.post('/plantation', { onRequest: [verifyJWT] }, registerPlantation) // update plantation
  app.get('/plantations', { onRequest: [verifyJWT] }, listPlantations)

  /** Plant */
  app.post('/plant', registerPlant)
  app.get('/plant', listPlants)
}
