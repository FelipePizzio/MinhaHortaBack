import { FastifyInstance } from 'fastify'
import { verifyJWT } from './middlewares/verify-jwt'

import { registerUser } from './controllers/users/registerUser'
import { authenticate } from './controllers/users/authenticate'
import { profile } from './controllers/users/profile'
import { refresh } from './controllers/users/refresh'
import { updateProfile } from './controllers/users/updateProfile'

import { registerPlant } from './controllers/plants/registerPlant'
import { listPlants } from './controllers/plants/listPlants'
import { getPlant } from './controllers/plants/getPlant'

import { registerPlantation } from './controllers/plantations/registerPlantation'
import { listPlantations } from './controllers/plantations/listPlantations'
import { updatePlantation } from './controllers/plantations/updatePlantation'
import { removePlantation } from './controllers/plantations/removePlantation'
import { getPlantation } from './controllers/plantations/getPlantation'


export async function appRoutes(app: FastifyInstance) {
  /** User */
  app.post('/users', registerUser)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
  app.put('/me', { onRequest: [verifyJWT] }, updateProfile)

  app.post('/plantation', { onRequest: [verifyJWT] }, registerPlantation)
  app.put('/plantation', { onRequest: [verifyJWT] }, updatePlantation)
  app.delete('/plantation', { onRequest: [verifyJWT] }, removePlantation)
  app.get('/plantation/:plantationId', { onRequest: [verifyJWT] }, getPlantation)

  app.get('/plantations', { onRequest: [verifyJWT] }, listPlantations)

  /** Plant */
  app.post('/plant', registerPlant)
  app.get('/plant/:plantId', getPlant)

  app.get('/plants', listPlants)
}
