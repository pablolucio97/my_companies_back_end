import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListPlacesUseCase } from './listPlacesUseCase'


export class ListPlacesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listPlacesUseCase = container.resolve(ListPlacesUseCase)
        const places = await listPlacesUseCase.execute()
        return res.status(200).json(places)
    }
}
