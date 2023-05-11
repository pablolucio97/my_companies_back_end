import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreatePlaceUseCase } from './createPlacesUseCase'

export class CreatePlaceController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            nome,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            company_id
        } = req.body
        const createPlaceUseCase = container.resolve(CreatePlaceUseCase)
        await createPlaceUseCase.execute({
            nome,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            company_id
        })
        return res.status(201).json({ message: "Local cadastrado com sucesso!" })
    }
}