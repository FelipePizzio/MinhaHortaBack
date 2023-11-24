import { FastifyInstance } from 'fastify'
import { verifyJWT } from './middlewares/verify-jwt'

import { createUser } from './controllers/users/createUser'
import { authenticate } from './controllers/users/authenticate'
import { findByIdUser } from './controllers/users/findByIdUser'
import { refresh } from './controllers/users/refresh'
import { updateUser } from './controllers/users/updateUser'

import { createPlant } from './controllers/plants/createPlant'
import { findAllPlants } from './controllers/plants/findAllPlants'
import { findByIdPlant } from './controllers/plants/findByIdPlant'

import { createPlantation } from './controllers/plantations/createPlantation'
import { findByUserPlantation } from './controllers/plantations/findByUserPlantation'
import { updatePlantation } from './controllers/plantations/updatePlantation'
import { removePlantation } from './controllers/plantations/removePlantation'
import { findByIdPlantation } from './controllers/plantations/findByIdPlantation'
import { findByUserTasks } from './controllers/tasks/findByUserTasks'
import { removeTask } from './controllers/tasks/removeTask'
import { updateTask } from './controllers/tasks/updateTask'
import { createTask } from './controllers/tasks/createTask'


export async function appRoutes(app: FastifyInstance) {
  /** User */
  app.post('/users', createUser)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, findByIdUser)
  app.put('/me', { onRequest: [verifyJWT] }, updateUser)

    /** Plantation */
    app.post('/plantation', { onRequest: [verifyJWT] }, createPlantation)
    app.put('/plantation', { onRequest: [verifyJWT] }, updatePlantation)
    app.delete('/plantation', { onRequest: [verifyJWT] }, removePlantation)
    app.get('/plantation/:plantationId', { onRequest: [verifyJWT] }, findByIdPlantation)

    app.get('/plantations', { onRequest: [verifyJWT] }, findByUserPlantation)

    /** Tasks */
    app.post('/task', { onRequest: [verifyJWT] }, createTask)
    app.put('/task', { onRequest: [verifyJWT] }, updateTask)
    app.delete('/task', { onRequest: [verifyJWT] }, removeTask)

    app.get('/tasks', { onRequest: [verifyJWT] }, findByUserTasks)

  /** Plant */
  app.post('/plant', createPlant)
  app.get('/plant/:plantId', findByIdPlant)

  app.get('/plants/:requestedPage', findAllPlants)
}
