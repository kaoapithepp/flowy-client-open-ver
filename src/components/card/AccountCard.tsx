import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

// Global Components
import { BorderedButton } from '../button/BorderedButton';
import { ButtonAccount } from '../button/ButtonAccount';

//MUIs
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

export const AccountCard: React.FC = () => {

    const navigate = useNavigate();

    function logoutClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/", { replace: false });
    }

    return(
        <BGdrop>
            <div className='position-bottom'>
                <Container>
                    <Content>
                        <div className='grid-column'>
                            <ButtonAccount className='button-size'><PersonOutlineRoundedIcon className='icon-size'/></ButtonAccount>
                            <h2>ชื่อ-นามสกุล</h2>
                            <h3>อีเมล: </h3>
                            <h3>xxxxx@mail.xxx</h3>
                            <h3>เบอร์โทร: </h3>
                            <h3>0123456789</h3>
                        </div>
                    </Content>
                    <Content>
                        <h2>ประวัติการใช้สเปซ</h2>
                        <Title>
                            <h3>ชื่อสเปซ</h3>
                            <h3>วันที่จอง</h3>
                            <h3>สถานะ</h3>
                        </Title>
                        <History>
                            <Link to="/ticket"><h4>Coworking space</h4></Link>
                            <h4>02 Jan 2023</h4>
                            <h4>Succeed</h4>
                        </History>
                    </Content>
                    <div className='button-display'>
                        <BorderedButton onClick={logoutClick}>ออกจากระบบ</BorderedButton>
                    </div>
                </Container>
            </div>
        </BGdrop>
    );
}

const BGdrop = styled.div`
    background-color: rgba(97, 97, 97, 0.3);
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 2;

    .position-bottom{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        margin: 0 auto;
    }
`;

const Container = styled.div`
    padding: 1px 16px 16px 16px;
    background-color: var(--white);
    border-radius: 16px 16px 0px 0px;
    margin: 0 auto;
    background-image: url('/images/gradient-background.png');
    background-size: 100%;
    background-repeat: no-repeat;
    
    .button-display{
        margin:-16px auto; 
        max-width: 400px;
        justify-items: center;
    }

    .button-size{
        width: 64px;
        height: 64px;
    }

    .icon-size{
        transform: scale(150%);
    }

    .grid-column{
        display: grid;
        grid-template-columns: 90px 1fr;
        margin: 0 auto;
        max-width: 600px;
        align-items: center;

        h3{
            padding: 4px 0px;
            text-overflow: clip;
        }
    }
`;

const Content = styled.div`
    padding: 16px;
    background-color: var(--white);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    max-height: 35vh;
    max-width: 600px;
    margin: 16px auto;
    overflow-x: hidden;
`;

const Title = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    margin: 8px 0px;
`;

const History = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 25vh;
    overflow-y: auto;
    align-items: center;
    text-align: center;
`;
