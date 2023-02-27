import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { SeatSelectCard } from '../../../components/card/SeatSelectCard';
import { ButtonBack } from '../../../components/button/ButtonBack';

// section

//MUIs
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const DeskSelect: React.FC = () => {

    const navigate = useNavigate();

    function buttonBackClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/booking", { replace: false });
    }
    
    return(
        <Section>
            <ButtonBack onClick={buttonBackClick}><ArrowBackRoundedIcon /></ButtonBack>
            <div className='position-header'>
                <h1>ที่นั่งแบบไหนเหมาะสำหรับคุณ?</h1>
            </div>
            <Container>
                <SeatSelectCard />
            </Container>
        </Section>
    );
}

const Section = styled.div`
    padding: 0px;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;

    h1{
        padding: 16px;
        margin-left: 66px;
        text-align: right;
    }

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
    padding: 0px 16px;
    max-width: 1024px;
`;

export default DeskSelect;