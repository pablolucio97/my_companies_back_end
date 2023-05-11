import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCompanyUseCase } from './createCompanyUseCase'

export class CreateCompanyController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { nome, website, cnpj, user_id } = req.body
        const createCompanyUseCase = container.resolve(CreateCompanyUseCase)
        await createCompanyUseCase.execute({
            nome,
            website,
            cnpj,
            user_id
        })
        return res.status(201).json({ message: "Empresa registrada com sucesso!" })
    }
}