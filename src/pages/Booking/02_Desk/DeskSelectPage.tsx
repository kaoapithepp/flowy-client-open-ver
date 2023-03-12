import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import axios from 'axios';

// Global Components
import { BackButton } from '../../../components/button/BackButton';

// Components
import { DeskSelectCard } from './components/DeskSelectCard';

const DeskSelectPage: React.FC = () => {
    const [deskInfo, setDeskInfo] = useState([]);
    
    const navigate = useNavigate();
    const { placeId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const customerAmount = searchParams.get('ctm');

    useEffect(() => {
        const isThereToken = localStorage.getItem('flowyToken')
            ? JSON.parse(localStorage.getItem('flowyToken') as string)
            : null;
        if (isThereToken) {
            try {
                axios.get(`${import.meta.env.VITE_FLOWY_API_ROUTE}/desk/by-place/${placeId}?ctm=${customerAmount}`, {
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    setDeskInfo((res as any).data);
                })
            } catch (err: any) {
                alert(err.message);
            }
        }
    },[])
    
    return(
        <>
            <Helmet>
                <title>Select Your Desk | Flowy Booking (2/4)</title>
            </Helmet>
            <Section>
                <BackButton />
                <div className="position-header">
                    <h1>ที่นั่งแบบไหน<br />เหมาะสำหรับคุณ?</h1>
                </div>
                <Container>
                <div className="desks-showcase">
                    {deskInfo.length < 1 ? 
                        <p className="no-result">ไม่พบผลการค้นหา น่าจะต้องเลือกใหม่นะ :(</p>
                        :
                        deskInfo.map((elem: any, key: any) => {
                        return <DeskSelectCard {...elem} {...key}/>
                        })
                    }
                </div>
                </Container>
            </Section>
        </>
    );
}

const Section = styled.div`
    padding: 0px;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;

    h1{
        padding: 16px;
        margin-top: 3em;
        text-align: center;
    }

    ::before{
        display: flex;
        content: '';
    }

    ::after{
        display: flex;
        content: '';
        padding-bottom: 69px;
    }

    .position-footer{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        margin: 0 auto;
    }

    .desks-showcase {
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

        @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 16px;
        }
        @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 16px;
        }

        @media only screen and (min-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 16px;        
        }
    }

    .no-result {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;

        color: var(--grey-400);
        text-align: center;
    }
`;

const Container = styled.div`
    padding: 0px 16px;
    max-width: 1024px;
`;

export default DeskSelectPage;