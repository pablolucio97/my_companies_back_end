interface IUser {
    id: string
    nome: string
    email: string
    senha: string
}

interface IUserDTO {
    nome: string
    email: string
    senha: string
}

interface IUserRepository {
    listUsers(): Promise<IUser[]>
    createUser(user: IUserDTO): Promise<void>
    deleteUser(id: string): Promise<void>
}

export { IUser, IUserDTO, IUserRepository }