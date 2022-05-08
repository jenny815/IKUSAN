import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import usersRoute from './routes/users.js'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGODB)

app.use(bodyParser.json())

app.use('/users', usersRoute)

app.listen(process.env.Port, () => {
  console.log('server start')
})
