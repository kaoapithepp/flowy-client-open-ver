import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

// Global Components
import { Button } from '../../components/button/Button';

// Sections
import Auth from './Auth';

const ForgotPassword: React.FC = () => {

    const navigate = useNavigate();

    function loginClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/", { replace: false });
    }

    return( 
        <Container>
            <div className='padding-content'>
                <Header><h3>ลืมรหัสผ่าน</h3></Header>
                <label><h4>อีเมล</h4></label>
                <input type="text" placeholder="อีเมล" name="email" required></input>
                <p>กรุณากรอกอีเมลในช่องด้านบน เราจะส่งลิงก์ให้ท่านเพื่อดำเนินการในขั้นตอนต่อไป</p>
                <Button onClick={loginClick}>ตั้งรหัสผ่านใหม่</Button>
                <div className='collum-display'>
                    <Link to="/">กลับสู่หน้าล็อกอินเข้าสู่ระบบ</Link>
                </div>
            </div>
        </Container>        
    );
}

const Container = styled.div`
    padding: 16px;
    margin: 0 auto;
    max-width: 400px;
    min-width: 300px;
    border-radius: 16px;

    p{
        font-size: 14px;
        text-align: center;
    }

    span{
        text-decoration: underline;
    }

    input{
        width: 100%;
        padding: 8px 8px ;
        margin: 8px 0px;
        display: inline-block;
        border-radius: 8px;
        border: 1px solid var(--grey-300);
        box-sizing: border-box;
        font-family: var(--brand-font);
        font-size: 16px;
    }

    .collum-display{
        display: grid;
        text-align: center;
        align-items: center;
    }

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
        background-color: var(--white);
        box-shadow: var(--shadow);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        
        .padding-content{
            padding: 0px 16px;
        }
    }

    @media only screen and (min-width: 1024px) {
        max-width: 488px;
        background-color: var(--white);
        box-shadow: var(--shadow);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        .padding-content{
            padding: 0px 16px;
        }
    } 
`;

const Header = styled.div`
    width: 100% ;
    padding: 8px 0px;
    border-bottom: 1px solid var(--grey-300);
    text-align: center;
    margin-bottom: 16px;
`;

export default ForgotPassword;