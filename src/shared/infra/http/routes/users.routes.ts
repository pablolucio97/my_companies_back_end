import { AuthenticateUserController } from '@modules/users/useCases/authenticateUser/AuthenticateUserController'
import { CreateUserController } from '@modules/users/useCases/createUser/createUserController'
import { DeleteUserController } from '@modules/users/useCases/deleteUser/deleteUserController'
import { ListUsersController } from '@modules/users/useCases/listUsers/listUsersController'
import { Router } from 'express'


const usersRoutes = Router()

const usersListController = new ListUsersController()
const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const authenticateUserController = new AuthenticateUserController()

usersRoutes.get('/list', usersListController.handle)
usersRoutes.post('/create', createUserController.handle)
usersRoutes.delete('/delete/:id', deleteUserController.handle)
usersRoutes.post('/auth', authenticateUserController.handle)

export { usersRoutes }