import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// Global Components
import { BackButton } from '../../../components/button/BackButton';
import { BookingFooter } from '../../../components/ui/BookingFooter';

//section
import TimeSlotButton from './components/TimeSlotButton';

const TimeSlotPage: React.FC = () => {
    const [timeslotData, setTimeslotData] = useState([]);
    const { deskId } = useParams();

    useEffect(() => {
        const isThereToken = localStorage.getItem('flowyToken')
            ? JSON.parse(localStorage.getItem('flowyToken') as string)
            : null;
        if (isThereToken) {
            try {
                axios.get(`${import.meta.env.VITE_FLOWY_API_ROUTE}/timeslot/${deskId}`, {
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    setTimeslotData((res as any).data);
                });
            } catch (err: any) {
                alert(err.message);
            }
        }
    },[]);

    return(
        <Section>
            <BackButton />
            <Container>
                <h2>เลือกช่วงเวลา</h2>
                <p>โปรดเลือกสล็อทเวลา<br />ที่คุณต้องการเข้าใช้สเปซในวันนี้</p>
                <div className="slots-showcase">
                    {timeslotData.map((props: any)=>(
                        <TimeSlotButton start_time={props.start_time} end_time={props.end_time} status={props.status} />
                    ))}
                </div>
            </Container>
            <div className='position-footer'>
                <BookingFooter nextPath={`/payment`} buttonText="จองเลย!"/>
            </div>
        </Section>
    );
}

const Section = styled.div`
    padding: 0px;
    max-height: 120vh;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;
    
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

`;

const Container = styled.div`
    position: absolute;
    padding: 16px;
    border-radius: 16px;
    width: 300px;
    max-width: 1024px;
    margin: 16px auto;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2{
        text-align: center;
    }

    p{
        text-align: center;
        margin-bottom: 16px;
    }

    .slots-showcase {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 60vh;
        overflow-y: scroll;
        padding: 0px 8px;
    }
`;

export default TimeSlotPage;