import { CreateUserController } from '@modules/users/useCases/createUser/createUserController'
import { DeleteUserController } from '@modules/users/useCases/deleteUser/deleteUserController'
import { ListUsersController } from '@modules/users/useCases/listUsers/listUsersController'
import { Router } from 'express'


const usersRoutes = Router()

const usersListController = new ListUsersController()
const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()

usersRoutes.get('/list', usersListController.handle)
usersRoutes.post('/create', createUserController.handle)
usersRoutes.delete('/delete/:id', deleteUserController.handle)

export { usersRoutes }