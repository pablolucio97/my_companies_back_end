import { CreateCompanyController } from '@modules/companies/useCases/createCompanyUseCase/createCompanyController'
import { DeleteCompanyController } from '@modules/companies/useCases/deleteCompanyUseCase/deleteCompanyController'
import { ListCompaniesByUserController } from '@modules/companies/useCases/listCompaniesByUserUseCase/ListCompaniesByUserController'
import { UpdateCompanyController } from '@modules/companies/useCases/updateCompanyUseCase/updateCompanyController'
import { Router } from 'express'
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate'

const companiesRoutes = Router()

const createCompanyController = new CreateCompanyController()
const listCompaniesByUserController = new ListCompaniesByUserController()
const deleteCompanyController = new DeleteCompanyController()
const updateCompanyController = new UpdateCompanyController()

companiesRoutes.post('/create', ensureAuthenticate, createCompanyController.handle)
companiesRoutes.get('/list-by-users/:id', ensureAuthenticate, listCompaniesByUserController.handle)
companiesRoutes.delete('/delete/:id', ensureAuthenticate, deleteCompanyController.handle)
companiesRoutes.put('/update/:id', ensureAuthenticate, updateCompanyController.handle)

export { companiesRoutes }
