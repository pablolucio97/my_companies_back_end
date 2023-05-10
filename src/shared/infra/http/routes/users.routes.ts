import { CreateUserController } from '@modules/users/useCases/createUser/createUserController'
import { ListUsersController } from '@modules/users/useCases/listUsers/listUsersController'
import { Router } from 'express'


const usersRoutes = Router()

const usersListController = new ListUsersController()
const createUserController = new CreateUserController()

usersRoutes.get('/list', usersListController.handle)
usersRoutes.post('/create', createUserController.handle)

export { usersRoutes }