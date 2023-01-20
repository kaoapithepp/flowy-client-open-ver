import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TicketDetail: React.FC = () => {
    return (
        <Container>
            <div className='row-display'>
                <div className='column-display'>
                    <h3>Booking ID:</h3>
                    <h3>0000012345</h3>
                </div>
                <div className='column-display'>
                    <h3>Date:</h3>
                    <h3>02 Jan 2023</h3>
                </div>
                <div className='column-display'>
                    <h3>Time:</h3>
                    <h3>10:00 - 12:00</h3>
                </div><div className='column-display'>
                    <h3>Place:</h3>                        
                    <h3>บ้านแม่เถาสเปซ</h3>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    padding: 0px;
    max-width: 450px;
    min-width: 300px;
    margin: 0 auto;
    .column-display{
        display: grid;
        grid-template-columns: 7.5em 1fr;
        margin: 2px 0px;
    }

    .row-display{
        display: grid;
        padding-top: 16px;
    }
`;

export default TicketDetail;