const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler, errorHAndler} = require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/goals',require('./routes/Userroutes'))


app.use(errorHAndler)

app.listen(port,()=>console.log(`Server listening on port ${port}`)
)