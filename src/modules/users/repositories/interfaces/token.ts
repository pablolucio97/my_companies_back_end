export interface IUserToken {
    id?: string
    token: string
    user_id: string
    expires_date: Date
    created_at?: Date
}

export interface IUserTokenRepository {
    create({ user_id, token, expires_date }: IUserToken): Promise<void>
}