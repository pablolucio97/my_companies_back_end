import { UserTokens } from '@modules/users/entities/userTokens'
import { getRepository, Repository } from 'typeorm'
import { IUserToken, IUserTokenRepository } from '../interfaces/token'

export class UserTokensRepository implements IUserTokenRepository {
    private userTokensRepository: Repository<UserTokens>
    constructor() {
        this.userTokensRepository = getRepository(UserTokens)
    }
    async create({ user_id, token, expires_date }: IUserToken): Promise<void> {
        const newUserToken = this.userTokensRepository.create({ user_id, token, expires_date })
        await this.userTokensRepository.save(newUserToken)
    }
}