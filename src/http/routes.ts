import { FastifyInstance } from 'fastify'
import { verifyJWT } from './middlewares/verify-jwt'

import { registerUser } from './controllers/users/registerUser'
import { authenticate } from './controllers/users/authenticate'
import { profile } from './controllers/users/profile'
import { refresh } from './controllers/users/refresh'
import { updateProfile } from './controllers/users/updateProfile'

import { registerPlant } from './controllers/plants/registerPlant'
import { listPlants } from './controllers/plants/listPlants'
import { listPlantInfo } from './controllers/plants/listPlantInfo'

import { registerPlantation } from './controllers/plantations/registerPlantation'
import { listPlantations } from './controllers/plantations/listPlantations'
import { updatePlantation } from './controllers/plantations/updatePlantation'
import { removePlantation } from './controllers/plantations/removePlantation'


export async function appRoutes(app: FastifyInstance) {
  /** User */
  app.post('/users', registerUser)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
  app.post('/me', { onRequest: [verifyJWT] }, updateProfile)

  app.post('/create-plantation', { onRequest: [verifyJWT] }, registerPlantation)
  app.post('/plantation', { onRequest: [verifyJWT] }, updatePlantation)
  app.delete('/plantation', { onRequest: [verifyJWT] }, removePlantation)

  app.get('/plantations', { onRequest: [verifyJWT] }, listPlantations)

  /** Plant */
  app.post('/plant', registerPlant)
  app.get('/plant', listPlantInfo)

  app.get('/plants', listPlants)
}
