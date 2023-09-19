import { FastifyInstance } from 'fastify'
import { verifyJWT } from './middlewares/verify-jwt'

import { registerUser } from './controllers/users/registerUser'
import { authenticate } from './controllers/users/authenticate'
import { profile } from './controllers/users/profile'
import { refresh } from './controllers/users/refresh'
import { updateProfile } from './controllers/users/updateProfile'

import { createPlant } from './controllers/plants/createPlant'
import { findAllPlants } from './controllers/plants/findAllPlants'
import { findByIdPlant } from './controllers/plants/findByIdPlant'

import { createPlantation } from './controllers/plantations/createPlantation'
import { findByUserPlantation } from './controllers/plantations/findByUserPlantation'
import { updatePlantation } from './controllers/plantations/updatePlantation'
import { removePlantation } from './controllers/plantations/removePlantation'
import { findByIdPlantation } from './controllers/plantations/findByIdPlantation'


export async function appRoutes(app: FastifyInstance) {
  /** User */
  app.post('/users', registerUser)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
  app.put('/me', { onRequest: [verifyJWT] }, updateProfile)

  app.post('/plantation', { onRequest: [verifyJWT] }, createPlantation)
  app.put('/plantation', { onRequest: [verifyJWT] }, updatePlantation)
  app.delete('/plantation', { onRequest: [verifyJWT] }, removePlantation)
  app.get('/plantation/:plantationId', { onRequest: [verifyJWT] }, findByIdPlantation)

  app.get('/plantations', { onRequest: [verifyJWT] }, findByUserPlantation)

  /** Plant */
  app.post('/plant', createPlant)
  app.get('/plant/:plantId', findByIdPlant)

  app.get('/plants', findAllPlants)
}
