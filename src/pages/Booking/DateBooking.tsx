import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/th';

// Global Components
import { ButtonDate } from '../../components/button/ButtonDate';

dayjs.locale('th');

const DateBooking: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs());

    const days = [...Array(7)].map((_, index) => {
        const date = selectedDate.startOf('week').add(index, 'day');
        const formattedDate = date.format('DD');
        return (
        <ButtonDate key={formattedDate} onClick={() => setSelectedDate(date)}>
            {/* <p>{date.format('ddd')}</p> */}
            <h4>{formattedDate}</h4>
        </ButtonDate>
        );
    });

    return (
        <Container>
        <div className='column-display'>
            <h2>วันที่</h2>
            <div className='row-display'>
            <h2>{selectedDate.format('MMMM')}</h2>
            {/* <h2>{selectedDate.format('YYYY')}</h2> */}
            <h2>{selectedDate.year() + 543}</h2>
            </div>
        </div>
        <Date>{days}</Date>
        </Container>
    );
};

const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;

    .row-display {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
    }

    .column-display {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Date = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    width: 100%;
    /* overflow-x: scroll; */
    gap: 2rem;
`;

export default DateBooking;
