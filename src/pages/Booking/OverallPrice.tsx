import React from 'react';
import styled from 'styled-components';

const OverallPrice: React.FC = () => {
    return(
        <Container>
            <h1>฿0.00</h1>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;
    margin-top: 3vh;
`;

export default OverallPrice;