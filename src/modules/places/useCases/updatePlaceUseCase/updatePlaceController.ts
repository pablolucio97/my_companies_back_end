import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdatePlaceUseCase } from './updatePlaceUseCase'

export class UpdatePlaceController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const {
            nome,
            cep,
            numero,
            rua,
            bairro,
            cidade,
            estado
        } = req.body
        const updatePlaceUseCase = container.resolve(UpdatePlaceUseCase)
        await updatePlaceUseCase.execute({
            id,
            nome,
            cep,
            numero,
            rua,
            bairro,
            cidade,
            estado
        })
        return res.status(200).json({ message: 'Local atualizado com sucesso!' })
    }
}