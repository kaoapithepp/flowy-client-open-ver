import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

// Global Components
import { Button } from '../../components/button/Button';

// Sections
import Auth from './Auth';

const Login: React.FC = () => {

    const navigate = useNavigate();

    function loginClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/explore", { replace: false });
    }

    return( 
        <Container>
            <Header><h3>เข้าสู่ระบบ หรือลงทะเบียน</h3></Header>
            <h3>ยินดีต้อนรับสู่ Flowy</h3>
            <h4>อีเมล</h4>
            <input type="text" placeholder="อีเมล" name="email" required></input>
            <h4>รหัสผ่าน</h4>
            <input type="text" placeholder="รหัสผ่าน" name="password" required></input>
            <Button onClick={loginClick}>เข้าสู่ระบบ</Button>
                <div className='collum-display'>
                    <Link to="/register">สร้างบัญชีผู้ใช้</Link>
                    <Link to="/forgotpassword">ลืมรหัสผ่าน?</Link>
                </div>
            <Or>หรือ</Or>
            <Auth />
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
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    
`;

const Header = styled.div`
    width: 100% ;
    padding: 8px 0px;
    border-bottom: 1px solid var(--grey-300);
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
        background-color: var(--grey-300);
        margin-right: 16px;
    }
    ::after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--grey-300);
        margin-left: 16px;
    }
`;

export default Login;