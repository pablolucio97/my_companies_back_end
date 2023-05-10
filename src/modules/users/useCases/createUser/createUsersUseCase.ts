import { UsersRepository } from '@modules/users/repositories/implementation/usersRepository';
import { ICreateUserDTO } from '@modules/users/repositories/interfaces/user';
import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs'
import { AppError } from '@errors/appError';

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository
    ) { }
    async execute(user: ICreateUserDTO) {

        const alreadyRegisteredUser = await this.usersRepository.findByEmail(user.email)

        if (alreadyRegisteredUser) {
            throw new AppError(403, 'Já existe um usuário cadastrado para este email.')
        }

        const encryptedPassword = await hash(user.senha, 8)
        user.senha = encryptedPassword

        await this.usersRepository.createUser(user)

    }
}