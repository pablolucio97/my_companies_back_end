import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'
import { authCredentials } from '@config/auth'
import { AppError } from '@errors/appError'

interface IPayload {
    sub: string
}

export async function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        throw new AppError(401, 'Não foi encontrado um token válido.')
    }

    const [, token] = authHeader.split(' ')

    try {
        const { sub: user_id } = verify(token, authCredentials.secret_token) as IPayload

        req.user = {
            id: user_id
        }

        next()

    } catch (error) {
        throw new AppError(401,
            'É obrigatório utilizar um token válido para fazer essa requisição.')
    }
}