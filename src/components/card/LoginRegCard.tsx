import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { Button } from '../button/Button';
import { BorderedButton } from '../button/BorderedButton';

export const LoginRegCard: React.FC = () => {

    const navigate = useNavigate();

    function loginClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/login", { replace: false });
    }

    function registerClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/register", { replace: false });
    }

    return(
        <BGdrop>
            <div className='position-bottom'>
                <Container>
                    <div className='button-display'>
                        <BorderedButton onClick={loginClick}>มีบัญชีอยู่แล้ว? เข้าสู่ระบบ</BorderedButton>
                        <Button onClick={registerClick}>สมัครสมาชิก</Button>
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
    padding: 16px;
    background-color: var(--white);
    border-radius: 16px 16px 0px 0px;
    margin: 0 auto;
    height: 100%;
    background-image: url('/images/gradient-background.png');
    background-size: 100%;
    background-repeat: no-repeat;
    
    .button-display{
        margin: 0 auto;
        padding: 75px 0px;
        max-width: 400px;
        justify-content: center;
        justify-items: center;
    }
`;