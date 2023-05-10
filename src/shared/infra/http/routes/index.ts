import { Router } from 'express'
import { usersRoutes } from './users.routes'
import { companiesRoutes } from './companies.routes'

const routes = Router()

routes.use('/usuarios', usersRoutes)
routes.use('/empresas', companiesRoutes)

export { routes }

