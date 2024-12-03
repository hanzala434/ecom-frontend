import React from 'react'
import { useState,useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import { getAllOrders,resetOrderDetails } from '../features/order/orderSlice'


const Dashboard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();


  const { orderList,isError, message } = useSelector((state) =>
    state.order,
    
  );


  useEffect(() => {
    if (isError) {
      console.log(message);
      
    }
    dispatch(getAllOrders());


    return () => {
      dispatch(resetOrderDetails())
    }
    
  }, [isError, message, dispatch]
);
  return (
    <>
    <div className='bg-black flex'>
        <h1 className='text-slate-50 text-4xl m-4'>Dashboard</h1>
    </div>
    <section className='p-2'>
    <ul role="list" className="divide-y divide-gray-100">
      {orderList.map((order) => (
        <li key={order} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={order.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{order.userName}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">Order Number: #{order._id}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{order.role}</p>
            {order.lastSeen ? (
              <p className="mt-1 text-xs/5 text-gray-500">
                Last seen <time dateTime={order.lastSeenDateTime}>{order.lastSeen}</time>
              </p>
            ) : (
             <h3>
              No orders to Show
             </h3>
            )}
          </div>
        </li>
      ))}
    </ul>
    </section>
    </>
  )
}


export default Dashboard
