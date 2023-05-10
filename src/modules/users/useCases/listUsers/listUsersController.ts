import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListUsersUseCase } from './listUsersUseCase'

export class ListUsersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listUsersUseCase = container.resolve(ListUsersUseCase)
        const users = await listUsersUseCase.execute()
        return res.status(200).json(users)
    }
}