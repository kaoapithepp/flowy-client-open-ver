import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { ButtonBack } from '../../components/button/ButtonBack';

//section
import DateBooking from './DateBooking';
import TimeslotBooking from './TimeslotBooking';
import QuantityInputComponent from './QuantityInputComponent';
import OverallPrice from './OverallPrice';
import FooterBooking from './FooterBooking';

//MUIs
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Booking: React.FC = () => {

    const navigate = useNavigate();

    function buttonBackClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/information", { replace: false });
    }

    return(
        <Section>
            <ButtonBack onClick={buttonBackClick}><ArrowBackRoundedIcon /></ButtonBack>
            <div className='content-display'>
                <Container>
                    <DateBooking date={''} month={''} year={''} />
                </Container>
                <Container>
                    <TimeslotBooking id={''} start_time={''} end_time={''} />
                </Container>
                <Container>
                    <QuantityInputComponent initialValue={0} />
                </Container>
                <OverallPrice />
                <div className='position-footer'>
                    <FooterBooking />
                </div>
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

    .content-display{
        padding: 16px;
        margin-top: 48px;
    }
`;

const Container = styled.div`
    padding: 16px;
    background: var(--white);
    box-shadow: var(--shadow);
    border-radius: 16px;
    max-width: 1024px;
    margin: 16px auto;
`;

export default Booking;