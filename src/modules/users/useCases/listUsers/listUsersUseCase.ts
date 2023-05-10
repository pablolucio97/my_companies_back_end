import { inject, injectable } from 'tsyringe'
import { UsersRepository } from '@modules/users/repositories/implementation/usersRepository';

@injectable()
export class ListUsersUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository
    ) { }

    async execute() {
        const users = await this.usersRepository.listUsers()
        return users
    }
}