import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"


const currency=  'inr'
const deliveryCharge= 50
//Placing orders using COD method
const placeOrder = async (req, res) => {
    try {
        console.log("Place Order Func working")
        const {userId, items, amount , address} =  req.body
        const orderData= {
            userId,
            items,
            address,
            amount,
            paymentMethod : "COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await  userModel.findByIdAndUpdate(userId, {cartData:{}})
        res.json({success: true, message:"Order Placed"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

// Placing orders using Razorpay method
const placeOrderRazorpay = async (req, res) => {
    
}


//All Orders Data for Admin Panel


const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true , orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

// User order data for frontend

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await orderModel.find({ userId  })
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

// update order status from admin panel

const updateStatus = async (req, res) => {
    try {
        const { orderId , status} = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true , message: "Status Updated"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

export { placeOrder, placeOrderRazorpay, allOrders, userOrders, updateStatus}