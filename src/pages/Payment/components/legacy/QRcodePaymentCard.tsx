import React from 'react';
import styled from 'styled-components';

const QRcodePaymentCard: React.FC = () => {
    return(
        <Container>
            <img  src="https://cdn-icons-png.flaticon.com/512/241/241528.png" alt="" />
        </Container>
    );
}

const Container = styled.div`
    padding: 16px;
    background: var(--white);
    box-shadow: var(--shadow);
    border-radius: 8px;
    margin: -8px auto 0px auto;

    img {
        display: block;
        max-width: 200px;
        width: 100%;
        margin: 0 auto;
    }  
`;

export default QRcodePaymentCard;