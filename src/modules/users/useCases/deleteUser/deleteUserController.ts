import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteUserUseCase } from './deleteUserUseCase'

export class DeleteUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const deleteUserUseCase = container.resolve(DeleteUserUseCase)
        await deleteUserUseCase.execute(id)
        return res.status(200).json({ message: 'User deleted with success!' })
    }
}