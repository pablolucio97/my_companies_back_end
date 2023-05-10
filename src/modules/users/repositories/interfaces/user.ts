interface IUser {
    id: string
    nome: string
    email: string
    senha: string
}

interface ICreateUserDTO {
    nome: string
    email: string
    senha: string
}

interface IUserRepository {
    listUsers(): Promise<IUser[]>
    createUser(user: ICreateUserDTO): Promise<void>
    deleteUser(id: string): Promise<void>
    findByEmail(email: string): Promise<IUser>
    findById(id: string): Promise<IUser>
}

export { IUser, ICreateUserDTO, IUserRepository }