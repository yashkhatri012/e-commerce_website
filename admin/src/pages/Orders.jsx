import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
        console.log(response)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };



  const statusHandler = async( event , orderId) =>{
    try {
      const response = await axios.post(backendUrl + '/api/order/status', {orderId, status:event.target.value}, {headers: {token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div>
      <h3>Order Page</h3>
      {orders.map((order, index) => (
        <div className="grid grid-cols-1 sm:grid-flow-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"    key={index}>
          <img className="" src={assets.parcel_icon} alt="" />
          <div>
            <div>
              {order.items.map((items, index) => {
                if (index === order.items.length - 1) {
                  return (
                    <p key={index} className="py-0.5">
                      {items.name} x {items.quantity} <span>{items.size} </span>{" "}
                    </p>
                  );
                } else {
                  return (
                    <p key={index} className="py-0.5">
                      {items.name} x {items.quantity} <span>{items.size} </span>{" "}
                      ,
                    </p>
                  );
                }
              })}
            </div>
            <p className="mt-3 mb-2 font-medium">{order.address.firstName + " " + order.address.lastName}</p>
            <div>
              <p>{order.address.street + ","} </p>
              <p>
                {order.address.city +
                  "," +
                  order.address.state +
                  "," +
                  order.address.country +
                  order.address.zipcode}{" "}
              </p>
              <p>{order.address.street + ","} </p>
            </div>
          </div>
          <div>
            <p className="text-sm sm:text-[15px]">Items : {order.items.length} </p>
            <p className="mt-3">Method : {order.paymentMethod} </p>
            <p>Payment : {order.payment ? 'Done' : 'Pending'} </p>
            <p>Date : {new Date(order.date).toLocaleDateString()} </p>
          </div>
          <p className="text-sm sm:text-[15px]">{currency}{order.amount} </p>
          <select onChange={(event)=>statusHandler(event, order._id)} value={order.status} className="p-2 font-semibold">
            <option value="Order placed">Order Placed</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
            
          </select>
        </div>
      ))}
    </div>
  );
};

export default Orders;
