import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//section
import QRcode from './QRcode';
import TicketDetail from './TicketDetail';

const TicketLayout: React.FC = () => {
    return (
        <Section>
            <QRcode />
            <TicketDetail />
        </Section> 
    );
}

const Section = styled.div`
    justify-content: center;
    align-items: center;
    padding: 0px 16px 16px 16px;
    max-width: 800px;
    margin: 0 auto;

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
    }

    @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
    }
`;

export default TicketLayout;