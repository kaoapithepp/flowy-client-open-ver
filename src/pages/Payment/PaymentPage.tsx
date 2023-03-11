import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import LoadingScreen from '../../components/ui/LoadingScreen';
import { BorderedButton } from '../../components/button/BorderedButton';

// Components
import PaymentDetail from './components/PaymentDetail';
import PaymentMethod from './components/PaymentMethod';

// Context
import { useBookEntityValue } from '../../context/BookEntityProvider';

// Utils
import { timerCalculationFromDeadlineTicket } from '../../utils/timerCalculation';

const PaymentPage: React.FC = () => {
    // set loading
    const [isLoading, setIsLoading] = useState(true);
    // Remote booking order
    const [bookingOrder, setBookingOrder] = useState<any>({});

    // timer
    const [isTimeout, setIsTimeout] = useState(false);
    const [minute, setMinute] = useState(1);
    const [second, setSecond] = useState(0);

    // Stripe
    const [stripePromise, setStripePromise] = useState<any>(null);
    const [paymentIntent, setPaymentIntent] = useState<any>({});
    const [clientSecret, setClientSecret] = useState("");

    // Local booking entity context
    const { bookingEntity, setBookingEntity } = useBookEntityValue();

    // Params
    const { bookId } = useParams();
    const navigate = useNavigate();

    const isThereToken = localStorage.getItem('flowyToken')
        ? JSON.parse(localStorage.getItem('flowyToken') as string)
        : null;

    useEffect(() => {
        setIsLoading(true);

        
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
                    setPaymentIntent((res as any).data.purchase_order);
                    setClientSecret((res as any).data.purchase_order.clientSecret);
                    setIsLoading(false);
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
            if(!IS_PRODUCTION_MODE){
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
                    }
                }, 1000)
                
            }
        } catch(err: any) {
            console.log(err.message);
        }
    },[]);

    async function cancelPurchase() {
        setIsLoading(true);
        if(isThereToken) {
            axios.put(`${import.meta.env.VITE_FLOWY_API_ROUTE}/booking/${bookId}`,
            {
                paymentIntentId: paymentIntent.id
            },
            {
                headers: {
                    Authorization: `Bearer ${isThereToken}`
                }
            })
            .then(res => {
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
                setIsLoading(false);
                navigate("/explore", { replace: true });
            })
        }
    
    }

    return(
        <>
            {isLoading ? <LoadingScreen />
                :
            <>
                <Helmet>
                    <title>Confirm Your Purchase | Flowy Booking (4/4)</title>
                </Helmet>
                <Gradient>
                    { isTimeout ? <TimeoutCard cancelFunc={cancelPurchase}/> : null }
                    <Section>
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
                        <div className="canceled-section">
                            <p className="cenceled-desc">เมื่อกดยกเลิกแล้ว จะต้องทำการจองใหม่ตั้งแต่เริ่มต้น</p>
                            <div className='button-size'>
                                <BorderedButton onClick={cancelPurchase}>ยกเลิกรายการจองนี้</BorderedButton>
                            </div>
                        </div>
                    </Section>
                </Gradient>
            </>
            }
        </>
    );
}




const Section = styled.div`
    padding-bottom: 1em;
    max-height: 100vh;
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
    }

    .canceled-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
        max-width: 600px;
        margin: 0 auto;
        margin-top: 10px;
        
        .cenceled-desc {
            margin-bottom: -10px;
            font-size: 12px;
            color: var(--grey-600);
        }
        
        .button-size{
            width: 100%;
        }
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