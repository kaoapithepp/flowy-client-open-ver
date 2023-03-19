import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// Global Components
import { Button } from '../../components/button/Button';
import { BorderedButton } from '../../components/button/BorderedButton';
import { InputField } from '../../components/input/InputField';

// Components
import Auth from './Auth';

interface UserEntityContext {
    first_name: string;
    last_name: string;
    email: string;
    tel_no: string;
    password: string;
    confirm_pw: string;
}

const Register: React.FC = () => {
    const [userEntity, setUserEntity] = useState<UserEntityContext>({
        first_name: '',
        last_name: '',
        email: '',
        tel_no: '',
        password: '',
        confirm_pw: ''
    });

    const navigate = useNavigate();

    // Reg-ex to validate the form an email
    async function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // Check email after clicked register whether valid or not
    async function handleCheckEmailThenNavigate() {
        // If not valid, then return nothing
        if(!isValidEmail(userEntity.email)){
            alert("Email is invalid format!");
            return;
        }
        
        if (userEntity.password !== userEntity.confirm_pw) {
            alert("Password and confirm is not matched!");
            return;
        }

        try {
            axios.post(`${import.meta.env.VITE_FLOWY_API_ROUTE}/user`, {
                first_name: userEntity.first_name,
                last_name: userEntity.last_name,
                email: userEntity.email,
                tel_no: userEntity.tel_no,
                password: userEntity.password
            })
            .then(res => {
                alert("Sign up successful!");
                navigate("/", { replace: false });
            }, (unres) => {
                alert(unres.response.data);
            })
            .catch(err => {
                alert(err.message);
            });

        } catch(err: any) {
            alert(err.message);
        }
        
    }

    async function registerClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        await handleCheckEmailThenNavigate();
    }

    function loginClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/", { replace: false });
    }

    return( 
        <Container>
            <div className='grid-display'>
                <div className='padding-content'>
                    <Header><h3>สมัครสมาชิก</h3></Header>
                    <div className='column-display'>
                        <div>
                            <InputField
                                callbackVal={(e: string) => setUserEntity({...userEntity, first_name: e})}
                                type="text"
                                placeholder="ชื่อ"
                                label="ชื่อ"
                                required={true} />
                        </div>
                        <div>
                            <InputField
                                callbackVal={(e: string) => setUserEntity({...userEntity, last_name: e})}
                                type="text"
                                placeholder="นามสกุล"
                                label="นามสกุล"
                                required={true} />
                        </div>
                    </div>        
                    <InputField
                        callbackVal={(e: string) => setUserEntity({...userEntity, email: e})}
                        type="text"
                        placeholder="อีเมล"
                        label="อีเมล"
                        required={true} />
                    <InputField
                        callbackVal={(e: string) => setUserEntity({...userEntity, tel_no: e})}
                        type="text"
                        placeholder="เบอร์โทร"
                        label="เบอร์โทร"
                        maxChar={10}
                        required={true} />
                    <div className='margin'>
                        <div className='column-display'>
                            <div>
                            <InputField
                                callbackVal={(e: string) => setUserEntity({...userEntity, password: e})}
                                type="password"
                                placeholder="รหัสผ่าน"
                                label="รหัสผ่าน"
                                required={true} />
                            </div>
                            <div>
                            <InputField
                                callbackVal={(e: string) => setUserEntity({...userEntity, confirm_pw: e})}
                                type="password"
                                placeholder="ยืนยันรหัสผ่าน"
                                label="ยืนยันรหัสผ่าน"
                                required={true} />
                            </div>
                        </div>
                    </div>
                    <Button onClick={registerClick} disabled={!userEntity.confirm_pw}>สมัครสมาชิก</Button>
                    <PageDivider>หรือ</PageDivider>
                    <BorderedButton onClick={loginClick}>มีบัญชีอยู่แล้ว? เข้าสู่ระบบ</BorderedButton>
                    {/* <Auth /> */}
                    <p>ท่านยอมรับ <span>ข้อกำหนดการใช้งาน</span> และ <span>นโยบายความเป็นส่วนตัว</span> ของ Flowy เมื่อดำเนินการต่อ</p>
                </div>
                <div className='img-size'>
                    <img  src="https://images.unsplash.com/photo-1612831454918-f65c3ecfc34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
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
        margin-top: -8px;
    }

    span{
        text-decoration: underline;
    }

    .img-size{
            display: none;
    }

    .margin{
        margin-bottom: -8px;
    }

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
        min-width: 400px;
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
        min-width: 400px;
        max-width: 1024px;
        background-color: var(--white);
        box-shadow: var(--shadow);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        .column-display{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }

        .grid-display{
            display: grid;
            grid-template-columns: 488px 488px;
            gap: 16px;
        }

        .img-size{
            display: flex;
            align-items: center;
            
            img{
                max-width: 488px;
                object-fit: cover;
                border-radius: 8px;
                height: 100%;
            }
        }

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

const PageDivider = styled.div`
    display: flex;
    align-items: center;
    margin: -8px 0px;
    
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

export default Register;