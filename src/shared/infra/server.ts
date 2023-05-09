import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

const PORT = '3335'

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})