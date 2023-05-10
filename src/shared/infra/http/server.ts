import 'reflect-metadata'
import cors from 'cors'
import express, { json } from 'express'
import { routes } from './routes'
import '@shared/containers'
import '@shared/database'

const app = express()

app.use(json())
app.use(cors())
app.use(routes)

const PORT = '3335'

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})