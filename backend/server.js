import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'

//App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors())
//api endpoints

app.use('/api/user', userRouter)

//api endpoints

app.get('/', (req,res)=>{
    res.send("API WORKING")
})


app.listen(port  )