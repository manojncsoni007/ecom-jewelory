import React from 'react'
import { Navbar } from '../../components'
import { useCart } from '../../context'
import { GiConfirmed } from "react-icons/gi";
import './Order.css'

const Order = () => {
    const { order } = useCart();
    return (
        <>
            <Navbar />
            <h3 className='title'>Order Summary</h3>
            <div className="order-summary-container">
                <div className='order-summary-detail'>
                    <div className="order-summary_header">
                        <GiConfirmed size="1.6rem" />
                        <p className='confirm-title'>Order Confirmed</p>
                    </div>
                    <p><b>Order Id:</b> {order?.orderId}</p>
                    <p><b>Payment Id:</b> {order?.paymentId}</p>
                    <p><b>Total Amount Paid:</b> {`₹${order?.amount}`}</p>
                </div>
                <div className='order-summary-product'>
                    {
                        order?.product.map((item) => (
                            <div className='order-product'>
                                <div className='order-product_img'>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className='order-product_info'>
                                    <h5>{item.name}</h5>
                                    <p><b>Quantity:</b> {item.qty}</p>
                                    <p><b>Price:</b> {item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export { Order }