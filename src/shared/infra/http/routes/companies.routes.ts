import { CreateCompanyController } from '@modules/companies/useCases/createCompanyUseCase/createCompanyController'
import { DeleteCompanyController } from '@modules/companies/useCases/deleteCompanyUseCase/deleteCompanyController'
import { ListCompaniesController } from '@modules/companies/useCases/listCompaniesUseCase/ListCompaniesController'
import { UpdateCompanyController } from '@modules/companies/useCases/updateCompanyUseCase/updateCompanyController'
import { Router } from 'express'

const companiesRoutes = Router()

const createCompanyController = new CreateCompanyController()
const listCompaniesController = new ListCompaniesController()
const deleteCompanyController = new DeleteCompanyController()
const updateCompanyController = new UpdateCompanyController()

companiesRoutes.post('/create', createCompanyController.handle)
companiesRoutes.get('/list', listCompaniesController.handle)
companiesRoutes.delete('/delete/:id', deleteCompanyController.handle)
companiesRoutes.put('/update/:id', updateCompanyController.handle)

export { companiesRoutes }