import React from 'react'
import { v4 as uuid } from "uuid";
import { Navbar } from '../../components'
import { useAuth, useCart } from '../../context'
import { getTotalCartPrice } from '../../utils';
import { showToast } from '../../utils/toast';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'
import { clearCart } from '../../services';


const Checkout = () => {

    const { cartState: { cartItem }, setOrder, cartDispatch } = useCart();
    const { user, token } = useAuth();
    const navigate = useNavigate();

    const totalAmount = getTotalCartPrice(cartItem);
    const totalPayableAmount = totalAmount + 299;

    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                reject(false);
            };
            document.body.appendChild(script);
        });
    };

    const proceedPaymentGateway = async () => {
        const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!response) {
            showToast('error', "Something went wrong with payment gateway");
            return;
        }

        const options = {
            key: "rzp_test_dDvjDqf2injCpY",
            amount: totalPayableAmount * 100,
            curreny: "INR",
            name: "GoldLane",
            description: "Thank you for shopping with us.",
            prefill: {
                name: user.fullName,
                email: user.email,
                contact: "9429971228",
            },
            theme: {
                color: "#DAA520",
            },

            handler: (response) => {
                const orderData = {
                    orderId: `order_${uuid()}`,
                    paymentId: response.razorpay_payment_id,
                    amount: totalPayableAmount,
                    product: [...cartItem]
                }
                setOrder({ ...orderData })
                clearCart(cartItem, token, cartDispatch);
                navigate("/order");
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
            <Navbar />
            <h3 className='title'>Checkout</h3>
            <div className="checkout-container">
                <h4>Diliver To</h4>
                <div className="address-container">
                    <div className='user-address'>
                        <input type="radio" checked={true} name="" id="" />
                        <div>
                            <p className='address-title'>Manoj Soni</p>
                            <p>Dhanera,Banaskantha,Gujarat -385310</p>
                            <p>Mo: 9429971228</p>
                        </div>
                    </div>
                </div>
                <div className="order-detail-container">
                    <h4>ORDER DETAILS</h4>
                    <div className="order-detail">
                        <div className='order-detail_Header'>
                            <p>ITEM NAME</p>
                            <p>QUANTITY</p>
                        </div>
                        {
                            cartItem.map((item) => (
                                <div className="space-between" key={item._id}>
                                    <p>{item.name}</p>
                                    <p>{item.qty}</p>
                                </div>
                            ))
                        }
                    </div>
                    <h4>PRICE DETAIL</h4>
                    <div className="price-detail">
                        <div className="space-between">
                            <p>Price ({cartItem.length}Item)</p>
                            <p>{totalAmount}</p>
                        </div>
                        <div className="space-between">
                            <p>Delivery Charges</p>
                            <p>299</p>
                        </div>
                        <div className="space-between">
                            <p className='price-main'>Total Amount</p>
                            <p className='price-main'>{totalPayableAmount}</p>
                        </div>
                    </div>
                    <button
                        className='order-btn'
                        onClick={() => proceedPaymentGateway()}
                    >Place Order</button>
                </div>
            </div>
        </>
    )
}

export { Checkout }