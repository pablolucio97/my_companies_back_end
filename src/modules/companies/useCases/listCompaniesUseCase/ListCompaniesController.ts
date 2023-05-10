import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCompaniesUseCase } from './listCompaniesUseCase'


class ListCompaniesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCompaniesUseCase = container.resolve(ListCompaniesUseCase)
        const companies = await listCompaniesUseCase.execute()
        return res.status(200).json(companies)
    }
}

export { ListCompaniesController }