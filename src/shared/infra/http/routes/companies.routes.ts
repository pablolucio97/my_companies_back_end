import { CreateCompanyController } from '@modules/companies/useCases/createCompanyUseCase/createCompanyController'
import { DeleteCompanyController } from '@modules/companies/useCases/deleteCompany/deleteCompanyController'
import { ListCompaniesController } from '@modules/companies/useCases/listCompaniesUseCase/ListCompaniesController'
import { Router } from 'express'

const companiesRoutes = Router()

const createCompanyController = new CreateCompanyController()
const listCompaniesController = new ListCompaniesController()
const deleteCompanyController = new DeleteCompanyController()

companiesRoutes.post('/create', createCompanyController.handle)
companiesRoutes.get('/list', listCompaniesController.handle)
companiesRoutes.delete('/delete/:id', deleteCompanyController.handle)

export { companiesRoutes }