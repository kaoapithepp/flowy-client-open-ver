import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { ButtonTime } from '../../../components/button/ButtonTime';
import { ButtonTimeClick } from '../../../components/button/ButtonTimeClick';
import { ButtonTimeUnavailable } from '../../../components/button/ButtonTimeUnavailable';
import { ButtonBack } from '../../../components/button/ButtonBack';

//section
import FooterTimeSlot from './FooterTimeSlot';

//data
import TimeSlotDataMap from '../mapData/TimeSlotDataMap';

//MUIs
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

interface Props {
    id: string;
    start_time: string;
    end_time: string;
};


const TimeSlot: React.FC = () => {

    const navigate = useNavigate();

    function buttonBackClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/desk-select", { replace: false });
    }

    return(
        <Section>
            <ButtonBack onClick={buttonBackClick}><ArrowBackRoundedIcon /></ButtonBack>
            <Container>
                <h2>เวลา</h2>
                <p>โปรดเลือกช่วงเวลาที่คุณต้องการเข้าใช้สเปซ</p>
                <Slot>
                    <TimeSlotDataMap />
                    {/* <ButtonTime>9:00  10:00</ButtonTime>
                    <ButtonTimeClick>10:00 - 11:00</ButtonTimeClick>
                    <ButtonTimeClick>11:00 - 12:00</ButtonTimeClick>
                    <ButtonTimeUnavailable>12:00 - 13:00</ButtonTimeUnavailable>
                    <ButtonTime>13:00 - 14:00</ButtonTime> */}
                </Slot>
            </Container>
            <div className='position-footer'>
                <FooterTimeSlot />
            </div>
        </Section>
    );
}

const Section = styled.div`
    padding: 0px;
    max-height: 120vh;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;
    
    ::before{
        display: flex;
        content: '';
    }

    ::after{
        display: flex;
        content: '';
        padding-bottom: 69px;
    }

    .position-footer{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        margin: 0 auto;
    }

`;

const Container = styled.div`
    position: absolute;
    padding: 16px;
    border-radius: 16px;
    width: 65vw;
    max-width: 1024px;
    margin: 16px auto;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2{
        text-align: center;
    }

    p{
        text-align: center;
        margin-bottom: 16px;
    }
`;

const Slot = styled.div`
    align-items: center;
    max-height: 60vh;
    overflow-x: scroll;
`;

export default TimeSlot;