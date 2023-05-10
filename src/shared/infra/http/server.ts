import 'reflect-metadata'
import "express-async-errors"
import cors from 'cors'
import express, { json } from 'express'
import { routes } from './routes'
import '@shared/containers'
import '@shared/database'
import { AppError } from '@errors/appError'

const app = express()

app.use(json())
app.use(cors())
app.use(routes)

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        message: `Internal server error: ${err.message}`
    })

})

const PORT = '3335'

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})