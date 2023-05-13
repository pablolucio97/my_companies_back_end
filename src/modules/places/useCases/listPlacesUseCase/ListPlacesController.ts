import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListPlacesUseCase } from './listPlacesUseCase'


export class ListPlacesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { itemsPerPage, page } = req.query
        const parsedItemsPerPage = parseInt(itemsPerPage as string)
        const parsedPage = parseInt(page as string)
        const listPlacesUseCase = container.resolve(ListPlacesUseCase)
        const places = await listPlacesUseCase
            .execute(id, parsedItemsPerPage, parsedPage)
        return res.status(200).json(places)
    }
}
