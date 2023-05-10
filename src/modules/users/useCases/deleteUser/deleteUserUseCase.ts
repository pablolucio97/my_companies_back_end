import { AppError } from '@errors/appError';
import { UsersRepository } from '@modules/users/repositories/implementation/usersRepository';
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository
    ) { }
    async execute(id: string) {
        const user = await this.usersRepository.findById(id)
        if (!user) {
            throw new AppError(404, "Usuário não encontrado.")
        }
        await this.usersRepository.deleteUser(id)
    }
}