import React from 'react';
import styled from 'styled-components';

const QRcodePayment: React.FC = () => {
    return(
        <Container>
            <img  src="https://cdn-icons-png.flaticon.com/512/241/241528.png" alt="" />
        </Container>
    );
}

const Container = styled.div`
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: -8px auto 0px auto;

    img {
        display: block;
        max-width: 200px;
        width: 100%;
        margin: 0 auto;
    }  
`;

export default QRcodePayment;