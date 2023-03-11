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
import ChosenTimeSlotTags from './components/ChosenTimeSlotTags';

const TimeSlotPage: React.FC = () => {
    const [timeslotData, setTimeslotData] = useState([]);
    const [chosenTimeslotData, setChosenTimeslotData] = useState([]);

    const { bookingEntity, setBookingEntity } = useBookEntityValue();
    
    const navigate = useNavigate();
    const { deskId } = useParams();

    // check token
    const isThereToken = localStorage.getItem('flowyToken')
        ? JSON.parse(localStorage.getItem('flowyToken') as string)
        : null;

    useEffect(() => {
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


    async function onFooterButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        setBookingEntity({...bookingEntity, ['selectedTimeSlots']: (chosenTimeslotData as [])});

        axios.post(`${import.meta.env.VITE_FLOWY_API_ROUTE}/booking/`, bookingEntity,{
            headers: {
                Authorization: `Bearer ${isThereToken}`
            }
        })
        .then(res => {
            const { booking_id } = res.data;
            navigate(`/payment/${booking_id}`, { replace: false });
        })
        .catch(err => console.log(err.message));
    }
    

    return(
        <>
            <Helmet>
                <title>Select Your Timeslot | Flowy Booking (3/4)</title>
            </Helmet>
            <Container>
                <BackButton />
                <Section>
                    <h2>เลือกช่วงเวลา</h2>
                    <p>โปรดเลือกสล็อทเวลา<br />ที่คุณต้องการเข้าใช้สเปซในวันนี้</p>
                    <div className="selected-slots">
                        {chosenTimeslotData.length == 0 ?
                            <p>สล็อทเวลาที่คุณเลือกจะปรากฎตรงนี้</p>:
                            chosenTimeslotData
                            .sort((fst:any, snd: any) => fst.orderNo - snd.orderNo)
                            .map((elem: any, key: any) => {
                                return <ChosenTimeSlotTags
                                    elem={elem}
                                    key={key}
                                    targetFunc={setTimeslotData}
                                    targetArr={timeslotData}
                                    srcFunc={setChosenTimeslotData}
                                    srcArr={chosenTimeslotData}
                                />
                            })
                        }
                    </div>
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

    .selected-slots,
    .slots-showcase {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .selected-slots {
        padding: 12px;
        border: 1px solid var(--grey-400);
        border-radius: 1em;
        margin: 18px 0;
        gap: .5em;

        p {
            margin: 0;
            color: var(--grey-400);
        }
    }

    .slots-showcase {
        gap: .5em;
        overflow: auto;
        max-height: 50vh;
        overflow: auto;
    }
`;

export default TimeSlotPage;