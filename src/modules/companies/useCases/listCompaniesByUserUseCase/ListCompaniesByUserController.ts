import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCompaniesByUserUseCase } from './listCompaniesByUserUseCase'


class ListCompaniesByUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { itemsPerPage, page } = req.query
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const listCompaniesByUserUseCase = container.resolve(ListCompaniesByUserUseCase)
        const companies = await listCompaniesByUserUseCase
            .execute(id, parsedItemsPerPage, parsedPage)
        return res.status(200).json(companies)
    }
}

export { ListCompaniesByUserController }

