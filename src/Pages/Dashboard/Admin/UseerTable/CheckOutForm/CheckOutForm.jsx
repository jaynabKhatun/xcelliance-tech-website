import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import UsePrice from "../../../../../Hooks/UsePrice";
import useAuth from "../../../../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');


    const [price] = UsePrice();
    // console.log('price', price);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: price })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);

            });



    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }


        //confirm card payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email || 'annonymous',
                    name: user.displayName || 'annonymous',
                },



            }


        })
        if (confirmError) {
            console.log(confirmError.message);
        } else {
            console.log('payment Intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                toast.success('Payment Successfull');
                //create payment info
                const paymentInfo = {
                    transactionId: paymentIntent.id,
                    amount: paymentIntent.amount,
                    status: 'customerVerified',
                    date: new Date()

                }
                // console.log(paymentInfo);
                try {
                    //save payment info to database
                    await axiosSecure.post('/verifyedCustomer', paymentInfo)
                        .then(res => {
                            console.log(res.data);
                        })




                } catch (err) {
                    console.log(err);
                    toast.error(err.message);
                }

            }
        }


    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm mt-4 btn-primary" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p>
                <span className="text-red-500">
                    {error}
                </span>
            </p>
            <p>
                <span className="text-green-500">
                    Transaction id:  {transactionId}
                </span>
            </p>
        </form>
    );
};

export default CheckOutForm;