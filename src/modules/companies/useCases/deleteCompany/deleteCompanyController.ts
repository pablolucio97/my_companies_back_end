import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteCompanyUseCase } from './deleteCompanyUseCase'

export class DeleteCompanyController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const deleteCompanyUseCase = container.resolve(DeleteCompanyUseCase)
        await deleteCompanyUseCase.execute(id)
        return res.status(200).json({ message: 'Empresa deletada com sucesso!' })
    }
}