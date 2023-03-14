import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import styled from 'styled-components';

// Context
import { useBookEntityValue } from '../../../context/BookEntityProvider';

// Global Components
import { Button } from '../../../components/button/Button';
import { BackButton } from '../../../components/button/BackButton';
import { BookingFooter } from '../../../components/ui/BookingFooter';

// Local Components
import { TimeSlotTags } from './components/TimeSlotTags';
import LoadingScreen from '../../../components/ui/LoadingScreen';

const TimeSlotPage: React.FC = () => {
    // set loading
    const [isLoading, setIsLoading] = useState(true);

    // timeslot state management
    const [timeslotData, setTimeslotData] = useState([]);
    const [chosenTimeslotData, setChosenTimeslotData] = useState([]);

    // context
    const { bookingEntity, setBookingEntity } = useBookEntityValue();
    
    // params
    const navigate = useNavigate();
    const { deskId } = useParams();

    // check token
    const isThereToken = localStorage.getItem('flowyToken')
        ? JSON.parse(localStorage.getItem('flowyToken') as string)
        : null;

    useEffect(() => {
        setIsLoading(true);
        if (isThereToken) {
            try {
                axios.get(`${import.meta.env.VITE_FLOWY_API_ROUTE}/timeslot/${deskId}`, {
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    setTimeslotData((res as any).data);
                    setIsLoading(false);
                });
            } catch (err: any) {
                alert(err.message);
            }
        }
    },[]);

    useEffect(() => {
        setBookingEntity({...bookingEntity, ['selectedTimeSlots']: (chosenTimeslotData as [])});
    },[chosenTimeslotData]);


    async function onFooterButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        await axios.post(`${import.meta.env.VITE_FLOWY_API_ROUTE}/booking/`, bookingEntity,{
            headers: {
                Authorization: `Bearer ${isThereToken}`
            }
        })
        .then(async res => {
            navigate(`/payment/${res.data.booking_id}`, { replace: false });
        })
        .catch(err => console.log(err.message));
    }
    

    return(
        <>
            <Helmet>
                <title>Select Your Timeslot | Flowy Booking (3/4)</title>
            </Helmet>
            {
                isLoading ? <LoadingScreen /> :
                <Container>
                    <BackButton />
                    <Section>
                        <h2>เลือกช่วงเวลา</h2>
                        <p>โปรดเลือกสล็อทเวลา<br />ที่คุณต้องการเข้าใช้สเปซในวันนี้</p>
                        <div className="slots-showcase">
                            {timeslotData
                            .sort((fst:any, snd: any) => fst.orderNo - snd.orderNo)
                            .map((elem: any, key: any)=>(
                                <TimeSlotTags
                                    elem={elem}
                                    key={key}
                                    targetFunc={setChosenTimeslotData}
                                    targetArr={chosenTimeslotData}
                                    srcFunc={setTimeslotData}
                                    srcArr={timeslotData}
                                />
                                ))}
                        </div>
                    </Section>
                    <div className="position-footer">
                        <div className="button-align">
                            <Button onClick={onFooterButtonClick}>จองเลยตอนนี้</Button>
                        </div>
                    </div>
                </Container>
            }
        </>
    );
}

const Container = styled.div`
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

        .button-align {
            display: flex;
            background: linear-gradient(0deg, var(--white) 20%, rgba(247, 25, 136, 0) 100%);
            justify-content: center;
            align-items: center;
            padding: 0px 16px;
        }

        button {
            width: 10em;
        }
    }

`;

const Section = styled.div`
    position: absolute;
    padding: 16px;
    border-radius: 16px;
    width: 70%;
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
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: .5em;

        padding: .5em;
        max-height: 50vh;
        
        overflow: auto;
    }
`;

export default TimeSlotPage;