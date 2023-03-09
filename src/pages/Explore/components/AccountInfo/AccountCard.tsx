import React, { useState, SetStateAction, Dispatch } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

// Global Components
import { BorderedButton } from '../../../../components/button/BorderedButton';
import { ProfileAvatar } from '../Search/ProfileAvatar';

//MUIs
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface IAccountCard {
    profile: {
        profile_imgUrl: string;
        first_name: string;
        last_name: string;
        email: string;
        tel_no: string;
    };
    accCardCallback: Dispatch<SetStateAction<boolean>>;
}

export const AccountCard: React.FC<IAccountCard> = ({ profile, accCardCallback }) => {

    const navigate = useNavigate();

    async function logoutClick(event: React.MouseEvent<HTMLButtonElement>) {
        try {
            event.preventDefault();
            localStorage.removeItem('flowyToken');
            navigate("/", { replace: false });
        } catch(err: any) {
            console.log(err.message);
        }
    }

    function handleBgDropClick(){
        // event.preventDefault();
        accCardCallback(false);
    }

    return(
        <Wrapper>
            <div className='position-bottom'>
                <Container>
                    <Content>
                        <div className='grid-column'>
                            <ProfileAvatar bgImg={profile.profile_imgUrl} className='button-size'/>
                            <div>
                                <h2>{profile.first_name} {profile.last_name}</h2>
                                <p><AccountCircleIcon /> {profile.email}</p>
                            </div>
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
                            <Link to="/ticket"><h4>บ้านแม่เถาสเปซ</h4></Link>
                            <h4>02 Jan 2023</h4>
                            <h4>Succeed</h4>
                        </History>
                    </Content>
                    <div className='button-display'>
                        <BorderedButton onClick={logoutClick}>ออกจากระบบ</BorderedButton>
                    </div>
                </Container>
            </div>
            <BackgroundExit onClick={handleBgDropClick}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 2;
    animation: fadein .2s linear;
    

    @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .position-bottom{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        margin: 0 auto;
    }
`;

const BackgroundExit = styled.div`
    background-color: rgba(100, 100, 100, 0.5);
    width: 100%;
    height: 100%;
    cursor: pointer;
`

const Container = styled.div`
    padding: 1px 16px 16px 16px;
    background-color: var(--white);
    border-radius: 16px 16px 0px 0px;
    margin: 0 auto;
    background-image: url('/images/gradient-background.png');
    background-size: 100%;
    background-repeat: no-repeat;
    animation: slideup .2s ease-out;
    
    @keyframes slideup {
        from { transform: translateY(50%); }
        to { transform: translateY(0%); }
    }
    
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
        grid-template-columns: 1fr 3fr;
        margin: 0 auto;
        max-width: 600px;
        align-items: center;

        p {
            margin: 0;
            color: var(--grey-600);
            font-size: 16px;
            display: flex;
            align-items: center;
            padding: 4px 0px;
            text-overflow: clip;
            gap: .2em;
        }
    }
`;

const Content = styled.div`
    padding: 16px;
    background-color: var(--white);
    box-shadow: var(--shadow);
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
