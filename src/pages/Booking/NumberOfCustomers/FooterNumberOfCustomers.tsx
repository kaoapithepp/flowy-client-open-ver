import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

// Global Components
import { Button } from '../../../components/button/Button';

interface NextStepContext {
    ctmAmt: number;
}

const FooterNumberOfCustomers: React.FC<NextStepContext> = ({ ctmAmt }) => {
    const navigate = useNavigate();
    const { placeId } = useParams();

    function buttonBookingClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate(`/book-desk/${placeId}?ctm=${ctmAmt}`, { replace: false });
    }

    return(
        <Container>
            <Section>
                <div className='button-size'>
                    <Button onClick={buttonBookingClick}>ถัดไป</Button>
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
    background-color: var(--white);
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    
    .button-size{
        width: 10em;
    }
`;

export default FooterNumberOfCustomers;