import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Global Components
import { TimeoutCard } from '../../components/card/TimeoutCard';
import { BackButton } from '../../components/button/BackButton';

// Components
import PaymentDetail from './components/PaymentDetail';
import PaymentMethod from './components/PaymentMethod';
import { BookingFooter } from '../../components/ui/BookingFooter';


const PaymentPage: React.FC = () => {
    const [isTimeout, setIsTimeout] = useState(false);
    const [minute, setMinute] = useState(5);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        try {
            const currentDate = new Date();
            const targetDate = new Date(currentDate.getTime() + (minute*60*1000));
            localStorage.setItem("deadlineTicket", String(targetDate));

            const ticketTimer = setInterval(() => {
                const deadline: string = localStorage.getItem("deadlineTicket") as string;

                var distance = Date.parse(deadline) - Date.now();
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setMinute(minutes);
                setSecond(seconds);

                if(minutes <= 0 && seconds <= 0) {
                    clearInterval(ticketTimer);
                    setIsTimeout(!isTimeout);
                }
            }, 1000)
   
        } catch(err: any) {
            console.log(err.message);
        }
        
    },[])

    return(
        <Gradient>
            { isTimeout ? <TimeoutCard /> : null }
            <Section>
                <BackButton />
                <div className="content-display">
                    <div className='timer'>
                        <h4>
                            กรุณาชำระค่าบริการภายใน {minute}:{String(second).length == 1 ? `0${second}` : second} นาที
                        </h4>
                    </div>
                    <PaymentDetail />
                    <PaymentMethod />
                    <div className="position-footer">
                        <BookingFooter buttonText="ชำระเงิน"/>
                    </div>
                </div>
            </Section>
        </Gradient>
    );
}

const Section = styled.div`
    padding: 0px;
    max-height: 120vh;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;
    
    h4{
        text-align: right;
        margin-bottom: 24px;
    }

    ::before{
        display: flex;
        content: '';
    }

    ::after{
        display: flex;
        content: '';
        padding-bottom: 69px;
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

    .timer{
        text-align: center;

        h1{
            font-size: 1.75rem;
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