import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

// Global Components
import { Button } from '../button/Button';

// Context
import { useBookEntityValue } from '../../context/BookEntityProvider';

interface BookingFooterContext {
    nextPath?: string;
    buttonText?: string;
    bookingKey?: string | any;
    bookingVal?: string | number | string[];
}

export const BookingFooter: React.FC<BookingFooterContext> = ({ nextPath, buttonText, bookingKey, bookingVal }) => {
    const { bookingEntity, setBookingEntity } = useBookEntityValue();
    const navigate = useNavigate();

    function onFooterButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        setBookingEntity({...bookingEntity, [bookingKey]: bookingVal});
        
        navigate(`${nextPath}`, { replace: false });
    }

    return(
        <Container>
            <Section>
                <div className='button-size'>
                    <Button onClick={onFooterButtonClick}>{buttonText}</Button>
                </div>
            </Section>
        </Container>
    );
}

const Container = styled.div`
    position: sticky;
    bottom: 0;
    z-index: 2;
    max-width: 100%;
    margin: 0 auto;
    width: 100%;
`;

const Section = styled.div`
    display: flex;
    background: linear-gradient(0deg, var(--white) 20%, rgba(247, 25, 136, 0) 100%);
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    
    .button-size{
        width: 10em;
    }
`;