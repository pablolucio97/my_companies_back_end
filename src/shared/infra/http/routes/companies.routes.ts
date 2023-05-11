import { CreateCompanyController } from '@modules/companies/useCases/createCompanyUseCase/createCompanyController'
import { DeleteCompanyController } from '@modules/companies/useCases/deleteCompanyUseCase/deleteCompanyController'
import { ListCompaniesController } from '@modules/companies/useCases/listCompaniesUseCase/ListCompaniesController'
import { UpdateCompanyController } from '@modules/companies/useCases/updateCompanyUseCase/updateCompanyController'
import { Router } from 'express'
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate'

const companiesRoutes = Router()

const createCompanyController = new CreateCompanyController()
const listCompaniesController = new ListCompaniesController()
const deleteCompanyController = new DeleteCompanyController()
const updateCompanyController = new UpdateCompanyController()

companiesRoutes.post('/create', ensureAuthenticate, createCompanyController.handle)
companiesRoutes.get('/list', ensureAuthenticate, listCompaniesController.handle)
companiesRoutes.delete('/delete/:id', ensureAuthenticate, deleteCompanyController.handle)
companiesRoutes.put('/update/:id', ensureAuthenticate, updateCompanyController.handle)

export { companiesRoutes }