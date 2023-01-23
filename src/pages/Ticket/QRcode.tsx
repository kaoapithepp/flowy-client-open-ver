import React from 'react';
import styled from 'styled-components';

const QRcode: React.FC = () => {
    return (
        <Container>
            <img  src="https://cdn-icons-png.flaticon.com/512/241/241528.png" alt="" />
        </Container>
    );
}

const Container = styled.div`
    padding-bottom: 16px;
    max-width: 350px;
    margin: 0 auto;
    
    img {
        display: block;
        width: 100%;
        margin: 0 auto;
    }
`;

export default QRcode;