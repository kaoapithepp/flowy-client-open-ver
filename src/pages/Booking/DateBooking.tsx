import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/th';

// Global Components
import { ButtonDate } from '../../components/button/ButtonDate';
import { ButtonDateDisable } from '../../components/button/ButtonDateDisable';

//MUIs
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

dayjs.locale('th');

const DateBooking: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [disablePrevWeek, setDisablePrevWeek] = useState(
        selectedDate.startOf('week').isBefore(dayjs().startOf('day'))
    );

    const today = dayjs().startOf('day');
    const days = [...Array(7)].map((_, index) => {
    const date = selectedDate.startOf('week').add(index, 'day');
    const formattedDate = date.format('DD');
    const isDisabled = date.startOf('day').isBefore(today) || date.startOf('day').diff(today, 'day') > 365;
    const ButtonComponent = isDisabled ? ButtonDateDisable : ButtonDate;
    return (
        <ButtonComponent key={formattedDate} onClick={() => setSelectedDate(date)} disabled={isDisabled}>
        <h4>{formattedDate}</h4>
        </ButtonComponent>
        );
    });


    const handlePrevWeek = () => {
        const prevWeek = selectedDate.subtract(1, 'week');
        setSelectedDate(prevWeek);
        setDisablePrevWeek(prevWeek.startOf('week').isBefore(dayjs().startOf('day')));
    };

    const handleNextWeek = () => {
        const nextWeek = selectedDate.add(1, 'week');
        setSelectedDate(nextWeek);
        setDisablePrevWeek(false);
    };

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
        <Date>
            {disablePrevWeek ? (
            <ButtonDis disabled><ArrowBackIosNewRoundedIcon /></ButtonDis>
            ) : (
            <ButtonAcction onClick={handlePrevWeek}><ArrowBackIosNewRoundedIcon /></ButtonAcction>
            )}
            <div className='day-display'>
                {days}
            </div>
            <ButtonAcction onClick={handleNextWeek}><ArrowForwardIosRoundedIcon /></ButtonAcction>
        </Date>
        </Container>
    );
};

const Container = styled.div`
    max-width: 655px;
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
        max-width: 500px;
        margin: 0 auto;
    }
`;

const Date = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    width: 100%;
    /* overflow-x: scroll; */
    gap: 1.5rem;

    .day-display{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        align-items: center;
        width: 100%;
        gap: 0rem 1rem;
    }

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
        .day-display{
            display: flex;
            width: 100%;
            gap: 1rem;
        }
    }

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
        .day-display{
            display: flex;
            width: 100%;
            gap: 1rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        .day-display{
            display: flex;
            width: 100%;
            gap: 1rem;
        }
    }
`;

const ButtonAcction = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: ${props => props.disabled ? "#EC9090" : "#DF4646"};
    color: var(--white);
    border-radius: 8px;
    box-shadow: var(--shadow);
    border: none;
    cursor: ${props => props.disabled ? "no-drop": "pointer"};

    transition: .3s;

    :hover {
        background-color: ${props => props.disabled ? "#EC9090" : "#D62E2E"};
        transform: scale(101%);
    }
`;

const ButtonDis = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: var(--grey-200);
    color: var(--grey-400);
    border-radius: 8px;
    box-shadow: var(--shadow);
    border: none;  
`;

export default DateBooking;
