import React from 'react';
import styled from 'styled-components';

// Global Components
import { ButtonTime } from '../../components/button/ButtonTime';
import { ButtonTimeClick } from '../../components/button/ButtonTimeClick';
import { ButtonTimeUnavailable } from '../../components/button/ButtonTimeUnavailable';

interface Props {
    id: string;
    start_time: string;
    end_time: string;
};

const TimeslotBooking: React.FC<Props>= (props: Props) => {
    return(
        <Container>
            <h2>เวลา</h2>
            <TimeSlot>
                {/* <ButtonTime>9:00  10:00</ButtonTime>
                <ButtonTimeClick>10:00 - 11:00</ButtonTimeClick>
                <ButtonTimeClick>11:00 - 12:00</ButtonTimeClick>
                <ButtonTimeUnavailable>12:00 - 13:00</ButtonTimeUnavailable>
                <ButtonTime>13:00 - 14:00</ButtonTime> */}
            </TimeSlot>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    align-items: center;
    max-width: 500px;
    max-height: 600px;
    margin: 0 auto;
`;

const TimeSlot = styled.div`
    align-items: center;
    max-height: 26vh;
    overflow-x: scroll;
`;

export default TimeslotBooking;