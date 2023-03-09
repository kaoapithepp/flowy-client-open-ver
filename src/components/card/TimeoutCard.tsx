import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { BorderedButton } from '../button/BorderedButton';

//MUIs
import AlarmOffIcon from '@mui/icons-material/AlarmOff';

export const TimeoutCard: React.FC = () => {

    const navigate = useNavigate();

    function buttonAcceptClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/explore", { replace: false });
    }

    return(
        <BGdrop>
            <Container>
                <Icon>
                    <AlarmOffIcon />
                </Icon>
            <h1>หมดเวลาชำระเงิน</h1>
            <h3>กรุณาเลือกสเปซที่ใช้สำหรับคุณ และชำระเงินภายในเวลา 5 นาที</h3>
            <div className='margin'>
                <BorderedButton onClick={buttonAcceptClick}>เข้าใจแล้ว</BorderedButton>
            </div>
            </Container>
        </BGdrop>
    );
}

const BGdrop = styled.div`
    background-color: rgba(97, 97, 97, 0.5);
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 100;
`;

const Container = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius: 16px;
    padding: 32px;
    max-width: 800px;
    min-width: 300px;
    height: 50vh;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: var(--white);

    .margin{
        margin-bottom: -16px;
        width: 50%;
    }
`;

const Icon = styled.div`
    transform: scale(350%);
    margin-top: 23px;
    padding: 16px;
`;