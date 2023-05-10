import { UsersRepository } from '@modules/users/repositories/implementation/usersRepository';
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository
    ) { }
    async execute(id: string) {
        await this.usersRepository.deleteUser(id)
    }
}