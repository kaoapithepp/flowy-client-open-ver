import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components/button/Button';

// Global Components
import { ButtonNavigateMaps } from '../../components/button/ButtonNavigateMaps';

//section
import Header from './Header';
import QRcode from './QRcode';
import TicketDetail from './TicketDetail';

const Ticket: React.FC = () => {
    
    const navigate = useNavigate();

    function handleToHome() {
        navigate('/explore', { replace: false });
    }

    return (
        <Gradient>
            <Section>
                <Content>
                    <Header />
                    <QRcode />
                    <TicketDetail />
                </Content>
                <div className='navigate-maps'>
                    <a href="https://www.google.co.th/maps/place/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C+%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99+4+%E0%B8%95%E0%B8%B6%E0%B8%81+30+%E0%B8%9B%E0%B8%B5+%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C+%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/@18.7955992,98.9522625,19z/data=!3m1!4b1!4m5!3m4!1s0x30da3a6e0df4c5d5:0xe42967aba2a42c7!8m2!3d18.7955982!4d98.9528521?hl=th"><ButtonNavigateMaps><img src='https://cdn-icons-png.flaticon.com/512/854/854878.png' alt="" />นำทางด้วยแผนที่</ButtonNavigateMaps></a>
                </div>
                <Button onClick={handleToHome}>กลับสู่หน้าหลัก</Button>
            </Section>
            
        </Gradient>
    );
}

const Section = styled.div`
    display: block;
    justify-content: center;
    padding: 16px;
    max-width: 800px;
    min-width: 350px;
    margin: 0 auto;

    .navigate-maps{
        width: 100%;
        max-width: 800px;
    
        img{
            width: 24px;
        }

        a{
            text-decoration: none;
        }
    }
`;

const Content = styled.div`
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
`;

const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('/images/gradient-background.png');
    background-size: 100%;
    background-repeat: no-repeat;
`;

export default Ticket;