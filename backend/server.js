import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()

dotenv.config()
connectDB()

app.use(express.json()) //it allows us to use JSON structure in POST requests @@IMPORTANT: it must be the first app.use defined

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT}.`))