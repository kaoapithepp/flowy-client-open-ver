import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import styled from 'styled-components';

// Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Global Variables
import { IS_PRODUCTION_MODE } from '../../App';

// Global Components
import { TimeoutCard } from '../../components/card/TimeoutCard';
import { BackButton } from '../../components/button/BackButton';

// Components
import PaymentDetail from './components/PaymentDetail';
import PaymentMethod from './components/PaymentMethod';

// Context
import { useBookEntityValue } from '../../context/BookEntityProvider';

// Utils
import { timerCalculationFromDeadlineTicket } from '../../utils/timerCalculation';
import FooterPayment from './components/CancelPaymentButton';

const PaymentPage: React.FC = () => {
    // Remote booking order
    const [bookingOrder, setBookingOrder] = useState<any>({});

    // timer
    const [isTimeout, setIsTimeout] = useState(false);
    const [minute, setMinute] = useState(5);
    const [second, setSecond] = useState(0);

    // Stripe
    const [stripePromise, setStripePromise] = useState<any>(null);
    const [clientSecret, setClientSecret] = useState("");

    // Local booking entity context
    const { bookingEntity, setBookingEntity } = useBookEntityValue();

    // Params
    const { bookId } = useParams();


    useEffect(() => {
        const isThereToken = localStorage.getItem('flowyToken')
            ? JSON.parse(localStorage.getItem('flowyToken') as string)
            : null;

        
        if (isThereToken) {
            try {
                axios.post(`${import.meta.env.VITE_FLOWY_API_ROUTE}/booking/${bookId}`, {}, {
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    // console.log(res.data)
                    setBookingOrder((res as any).data.booking_order);
                    setClientSecret((res as any).data.purchase_order.clientSecret);
                })
            } catch (err: any) {
                alert(err.message);
            }
        }

        /* Stripe acts */
        setStripePromise(loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY));

    },[]);


    useEffect(() => {
        try {
            if(IS_PRODUCTION_MODE){
                const currentDate = new Date();
                const targetDate = new Date(currentDate.getTime() + (minute*60*1000));
                localStorage.setItem("deadlineTicket", String(targetDate));

                const ticketTimer = setInterval(() => {
                    const { minutes, seconds } = timerCalculationFromDeadlineTicket();
            
                    setMinute(minutes);
                    setSecond(seconds);
            
                    if(minutes <= 0 && seconds <= 0) {
                        clearInterval(ticketTimer);
                        setIsTimeout(!isTimeout);
                        setBookingEntity({...bookingEntity,
                            selectedTimeSlots: [],
                            desk_id: '',
                            place_id: '',
                            total_bk_hr: 0,
                            total_bk_seat: 0,
                            total_bk_price: 0,
                            pymt_method: '',
                            status: '',
                        });
                        localStorage.removeItem("deadlineTicket");
                    }
                }, 1000)
                
            }
        } catch(err: any) {
            console.log(err.message);
        }
    },[]);

    return(
        <>
            <Helmet>
                <title>Confirm Your Purchase | Flowy Booking (4/4)</title>
            </Helmet>
            <Gradient>
                { isTimeout ? <TimeoutCard /> : null }
                <Section>
                    {/* <BackButton /> */}
                    <div className="content-display">
                        <h4>
                            กรุณาชำระค่าบริการภายใน {minute}:{String(second).length == 1 ? `0${second}` : second} นาที
                        </h4>
                        <PaymentDetail bookingOrder={bookingOrder}/>
                        {stripePromise && clientSecret && (
                            <Elements stripe={stripePromise} options={{ clientSecret }}>
                                <PaymentMethod />
                            </Elements>
                        )}
                    </div>
                    <FooterPayment />
                </Section>
            </Gradient>
        </>
    );
}




const Section = styled.div`
    padding-bottom: 1em;
    max-height: 120vh;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;
    
    h4{
        text-align: center;
        margin-bottom: 1em;
        margin-top: 2rem;
    }

    .position-footer{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        margin: 0 auto;
    }

    .content-display{
        padding: 16px;
        margin-top: 12px;
    }
`;

const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('/images/gradient-background2.png');
    background-size: 100%;
    background-repeat: no-repeat;
`;

export default PaymentPage;