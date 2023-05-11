import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeletePlaceUseCase } from './deletePlaceUseCase'

export class DeletePlaceController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const deletePlaceUseCase = container.resolve(DeletePlaceUseCase)
        await deletePlaceUseCase.execute(id)
        return res.status(200).json({ message: 'Local deletado com sucesso!' })
    }
}