import { UsersRepository } from '@modules/users/repositories/implementation/usersRepository';
import { IUserDTO } from '@modules/users/repositories/interfaces/user';
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository
    ) { }
    async execute(user: IUserDTO) {
        await this.usersRepository.createUser(user)
    }
}