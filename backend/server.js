import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//App Config
const app = express()
const port = process.env.PORT || 4000


connectDB()
connectCloudinary()
// middlewares
app.use(cors({
  origin: [ "http://localhost:5173", "https://yashecomweb.vercel.app/" ],
  credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//api endpoints

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)
//api endpoints
// Health check endpoint
app.get('/api/health-check', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});




app.listen(port  )