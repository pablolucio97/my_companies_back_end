import { inject, injectable } from 'tsyringe'
import { UsersRepository } from "@modules/users/repositories/implementation/usersRepository";
import { DateProvider } from '@shared/providers/dateProvider/implementation';
import { UserTokensRepository } from '@modules/users/repositories/implementation/usersTokensRepository';
import { AppError } from '@errors/appError';
import { compare } from 'bcryptjs'
import { authCredentials } from '@config/auth';
import { sign } from 'jsonwebtoken'

interface IAuthenticationResponse {
    usuario: {
        nome: string;
        email: string;
    };
    token: {
        token: string,
        expira_em: Date
    }
}

interface IBodyRequest {
    email: string
    senha: string
}


@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository,
        @inject('UsersTokensRepository')
        private userTokensRepository: UserTokensRepository,
        @inject('DateProvider')
        public dateProvider: DateProvider
    ) { }

    async execute({ email, senha }: IBodyRequest) {
        const user = await this.usersRepository.findByEmail(email)

        if (!user) {
            throw new AppError(404, 'Usuário não encontrado')
        }

        const passwordMatch = await compare(senha, user.senha)

        if (!passwordMatch) {
            throw new AppError(403, 'Email ou senha incorretos.')
        }

        const {
            secret_token,
            expires_in,
            expiration_time
        } = authCredentials

        const token = sign({}, secret_token, {
            subject: user.id,
            expiresIn: expires_in
        })

        const token_expires_days = this.dateProvider.addDays(expiration_time)

        await this.userTokensRepository.create({
            user_id: user.id,
            token: secret_token,
            expires_date: token_expires_days,
        })

        const tokenResponse: IAuthenticationResponse = {
            usuario: {
                nome: user.nome,
                email: user.email,
            },
            token : {
                token,
                expira_em: token_expires_days
            }
        }

        return tokenResponse
    }
}