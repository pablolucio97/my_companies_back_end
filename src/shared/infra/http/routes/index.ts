import { Router } from 'express'
import { usersRoutes } from './users.routes'
import { companiesRoutes } from './companies.routes'
import { placesRoutes } from './places.routes'

const routes = Router()

routes.use('/usuarios', usersRoutes)
routes.use('/empresas', companiesRoutes)
routes.use('/locais', placesRoutes)

export { routes }

