import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AthenticateUserUseCase'
import { container } from 'tsyringe'

export class AuthenticateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, senha } = req.body
        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)
        const authResponse = await authenticateUserUseCase.execute({ email, senha })
        return res.status(200).json(authResponse)
    }
}