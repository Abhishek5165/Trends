import React, { useEffect } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Verify = () => {

    const { nevigate, token, setCartItems, backendURL } = useContext(ShopContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null;
            }
            const response = await axios.post(backendURL + '/api/order/verifyStripe', { success, orderId }, { headers: { token } });

            if (response.data.success) {
                setCartItems({});
                nevigate('/orders');
                toast.success("Payment Successful.");
            } else {
                nevigate('/cart');
                toast.error("Payment failed try again!");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        verifyPayment();
    }, [token]);


    return (

        <div>

        </div>
    )
}

export default Verify;
