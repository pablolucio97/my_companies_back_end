import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateCompanyUseCase } from './updateCompanyUseCase'

export class UpdateCompanyController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { nome, cnpj, website } = req.body
        const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase)
        await updateCompanyUseCase.execute({ id, nome, cnpj, website })
        return res.status(200).json({ message: 'Empresa atualizada com sucesso!' })
    }
}