import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './createUsersUseCase'

export class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { nome, email, senha } = req.body
        const createUserUseCase = container.resolve(CreateUserUseCase)
        await createUserUseCase.execute({
            nome,
            email,
            senha
        })
        return res.status(201).json({ message: "User created with success!" })
    }
}