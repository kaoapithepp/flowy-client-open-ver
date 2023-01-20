import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { Button } from '../../components/button/Button';
import { BorderedButton } from '../../components/button/BorderedButton';

// Sections
import Auth from './Auth';

const Register: React.FC = () => {
    
    const navigate = useNavigate();

    function loginClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/", { replace: false });
    }

    function registerClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/", { replace: false });
    }

    return( 
        <Container>
            <Header><h3>สมัครสมาชิก</h3></Header>
            <h4>ชื่อ</h4>
            <input type="text" placeholder="ชื่อ" name="firstname" required></input>
            <h4>นามสกุล</h4>
            <input type="text" placeholder="นามสกุล" name="lastname" required></input>
            <h4>อีเมล</h4>
            <input type="text" placeholder="อีเมล" name="email" required></input>
            <h4>รหัสผ่าน</h4>
            <input type="text" placeholder="รหัสผ่าน" name="password" required></input>
            <h4>รหัสผ่าน</h4>
            <input type="text" placeholder="รหัสผ่าน" name="confirmpassword" required></input>
            <Button onClick={registerClick}>สมัครสมาชิก</Button>
            <Or>หรือ</Or>
            <Auth />
            <BorderedButton onClick={loginClick}>มีบัญชีอยู่แล้ว? เข้าสู่ระบบ</BorderedButton>
            <p>ท่านยอมรับ <span>ข้อกำหนดการใช้งาน</span> และ <span>นโยบายความเป็นส่วนตัว</span> ของ Flowy เมื่อดำเนินการต่อ</p>
        </Container>        
    );
}

const Container = styled.div`
    padding: 16px;
    margin: 0 auto;
    max-width: 400px;
    min-width: 300px;

    p{
        font-size: 14px;
        text-align: center;
    }

    span{
        text-decoration: underline;
    }

    input{
        width: 100%;
        padding: 5px 8px ;
        margin: 8px 0px;
        display: inline-block;
        border-radius: 8px;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        font-family: "IBM Plex Sans Thai";
        font-size: 16px;
    }
`;

const Header = styled.div`
    width: 100% ;
    padding: 8px 0px;
    border-bottom: 1px solid #E0E0E0;
    text-align: center;
    margin-bottom: 16px;
`;

const Or = styled.div`
    display: flex;
    align-items: center;
    
    ::before{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #E0E0E0;
        margin-right: 16px;
    }
    ::after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #E0E0E0;
        margin-left: 16px;
    }
`;

export default Register;