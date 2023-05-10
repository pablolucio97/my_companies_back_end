import { getRepository, Repository } from 'typeorm'
import { User } from '@modules/users/entities/user'
import {
    IUser,
    ICreateUserDTO,
    IUserRepository
 } from '@modules/users/repositories/interfaces/user';

export class UsersRepository implements IUserRepository {
    private repository: Repository<User>
    public constructor() {
        this.repository = getRepository(User)
    }

    async listUsers(): Promise<IUser[]> {
        const users = await this.repository.find()
        return users
    }

    async createUser(user: ICreateUserDTO): Promise<void> {
        const newUser = this.repository.create(user)
        await this.repository.save(newUser)
    }

    async deleteUser(id: string): Promise<void> {
        await this.repository.delete({ id })
    }

    async findByEmail(email: string): Promise<IUser> {
        const user = await this.repository.findOne({ email })
        return user
    }
    async findById(id: string): Promise<IUser> {
        const user = await this.repository.findOne({ id })
        return user
    }
}