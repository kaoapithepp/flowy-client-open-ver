import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

// Global Components
import { BackButton } from '../../../components/button/BackButton';
import { BookingFooter } from '../../../components/ui/BookingFooter';

// Components
import QuantityInputCustomer from './components/QuantityInputCustomer';

const CustomerAmountPage: React.FC = () => {
    const [customerAmt, setCustomerAmt] = useState(1);
    const navigate = useNavigate();
    const { placeId } = useParams();

    function buttonBackClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate(-1);
    }

    return(
        <>
            <Helmet>
                <title>Fill in Number of People | Flowy Booking (1/4)</title>
            </Helmet>
            <Container>
                <BackButton />
                <div className='content-display'>
                    <Wrapper>
                        <QuantityInputCustomer initialValue={customerAmt} dispatchFunc={setCustomerAmt}/>
                    </Wrapper>
                    <div className='position-footer'>
                        <BookingFooter 
                            nextPath={`/book-desk/${placeId}?ctm=${customerAmt}`}
                            buttonText="ถัดไป"
                            bookingKey="total_bk_seat"
                            bookingVal={customerAmt}
                        />
                    </div>
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
    padding: 0px;
    max-height: 120vh;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;
    
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
        margin-top: 48px;
    }
`;

const Wrapper = styled.div`
    padding: 16px;
    border-radius: 16px;
    max-width: 1024px;
    margin: 16px auto;
`;

export default CustomerAmountPage;