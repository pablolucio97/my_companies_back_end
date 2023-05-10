import { CreateCompanyController } from '@modules/companies/useCases/createCompanyUseCase/createCompanyController'
import { ListCompaniesController } from '@modules/companies/useCases/listCompaniesUseCase/ListCompaniesController'
import { Router } from 'express'

const companiesRoutes = Router()

const createCompanyController = new CreateCompanyController()
const listCompaniesController = new ListCompaniesController()

companiesRoutes.post('/create', createCompanyController.handle)
companiesRoutes.get('/list', listCompaniesController.handle)

export { companiesRoutes }