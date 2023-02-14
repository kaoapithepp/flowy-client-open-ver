import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

// Global Components
import { ButtonAuth } from '../../components/button/ButtonAuth';

const Auth: React.FC = () => {
    return(
        <Container>
            <div className='column-display'>
                <ButtonAuth><img src='https://cdn-icons-png.flaticon.com/512/300/300221.png' alt="" /><h4>เข้าสู่ระบบด้วย Google</h4></ButtonAuth>
                <ButtonAuth><img src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png' alt="" /><h4>เข้าสู่ระบบด้วย Facebook</h4></ButtonAuth>
            </div>
            <ButtonAuth><img src='https://cdn-icons-png.flaticon.com/512/731/731985.png' alt="" /><h4>เข้าสู่ระบบด้วย Apple</h4></ButtonAuth>
        </Container>
    );
}

const Container = styled.div`
    justify-content: center;
    align-items: center;
    margin-top: -8px;
    margin-bottom: -16px;
    
    h4{
        flex: 1 1 0%;
    }

    img{
        width: 24px;
        margin-left: 32px;
    }

    @media only screen and (min-width: 1024px) {
        .column-display{
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-bottom: -16px;
            gap: 16px;

            img{
                width: 24px;
                margin-left: 16px;
            }
        }
    }
`;

export default Auth;