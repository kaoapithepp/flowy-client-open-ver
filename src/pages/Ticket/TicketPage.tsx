import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import QRCode from "react-qr-code";
import { Helmet } from 'react-helmet-async';

// Global Components
import { Button } from '../../components/button/Button';
import { ButtonNavigateMaps } from '../../components/button/ButtonNavigateMaps';
import { BorderedButton } from '../../components/button/BorderedButton';
import LoadingScreen from '../../components/ui/LoadingScreen';

// utils
import { dateReformat } from '../../utils/dateReformat';

// MUIs
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import TableRestaurantRoundedIcon from '@mui/icons-material/TableRestaurantRounded';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccessibilityRoundedIcon from '@mui/icons-material/AccessibilityRounded';

const Ticket: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [bookingOrder, setBookingOrder] = useState<any>({});

    const navigate = useNavigate();
    const { bookId } = useParams();

    useEffect(() => {
        const isThereToken = localStorage.getItem('flowyToken')
        ? JSON.parse(localStorage.getItem('flowyToken') as string)
        : null;

        if(isThereToken){
            try {
                axios.get(`${import.meta.env.VITE_FLOWY_API_ROUTE}/booking/${bookId}`,{
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    setBookingOrder(res.data[0]);
                    setIsLoading(false);
                }, (unres) => {
                    alert(unres.response.data);
                })
            } catch (err: any) {
                alert(err.message);
            }
        }

    }, []);
        
    function handleToExplore(e: any) {
        e.preventDefault();
        navigate('/explore', { replace: false });
    }

    return (
        <>
            <Helmet>
                <title>Your Ticket | Flowy</title>
            </Helmet>
            {
                isLoading ? <LoadingScreen /> :
                <Container>
                    <Header>
                        <h1>{bookingOrder.place_name}</h1>
                        <div className="address">
                            <FmdGoodOutlinedIcon />
                            <p>{bookingOrder.description}</p>
                        </div>
                    </Header>
                    <InfoSection>
                        <div className="data-info">
                            <p>Booking Date</p>
                            <h3>{dateReformat(bookingOrder.createdAt)}</h3>
                        </div>
                        <div className="calendar-icon">
                            <CalendarMonthOutlinedIcon />
                        </div>
                    </InfoSection>
                    <InfoSection>
                        <div className="data-info">
                            <p>Desk Name</p>
                            <h3>{bookingOrder.desk_name}</h3>
                        </div>
                        <div className="calendar-icon">
                            <TableRestaurantRoundedIcon />
                        </div>
                    </InfoSection>
                    <InfoSection>
                        <div className="duration-info">
                            <p>Total Booking Time</p>
                            <h2>{bookingOrder.total_bk_hr} {bookingOrder.total_bk_hr > 1 ? "hrs" : "hr"}</h2>
                        </div>
                        <div className="calendar-icon">
                            <ScheduleOutlinedIcon />
                        </div>
                    </InfoSection>
                    <BookCredential>
                        <h3>Booking Credentials</h3>
                        <div className="circular-detail">
                            <div className="price-tag">
                                <div>
                                    <p>Price Amount</p>
                                    <h2>฿ {bookingOrder.total_bk_price}</h2>
                                </div>
                                <div>
                                    <p>Seats</p>
                                    <h2>{bookingOrder.total_bk_seat}</h2>
                                </div>
                            </div>
                            <div className="qr-code">
                                <QRCode
                                    fgColor="var(--grey-800)"
                                    bgColor="var(--grey-200)"
                                    size={256}
                                    style={{ height: "140px", maxWidth: "100%", width: "100%" }}
                                    viewBox={`0 0 256 256`}
                                    value={String(bookingOrder.booking_id)}
                                    />
                                <p>{bookingOrder.booking_id}</p>
                            </div>
                        </div>
                        <ButtonNavigateMaps>
                            <a href={`https://maps.google.com/?q=${bookingOrder.lat_geo},${bookingOrder.long_geo}`} target="_blank">
                                <NearMeIcon />นำทางด้วย Google Maps
                            </a>
                        </ButtonNavigateMaps>
                        <Button onClick={handleToExplore}>กลับสู่หน้าหลัก</Button>
                    </BookCredential>
                </Container>
            }
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px 0;
    max-width: 800px;
    margin: 0 auto;    

    a {
        display: flex;
        justify-content: center;
        gap: .5em;
        text-decoration: none;
        color: var(--grey-900);
    }

`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    padding: 1em;
    margin-top: 3em;

    border-bottom: 1px solid var(--grey-400);
    border-bottom-style: dashed;

    h1 {
        line-height: 1em;
        font-size: 3em;
        font-weight: 600;
        color: var(--primary);

        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        white-space: wrap;
        text-align: left;
    }

    .address {
        display: flex;
        gap: .5em;
        color: var(--grey-600);

        p {
            overflow: hidden;
            text-overflow: ellipsis;
            width: 90%;
            white-space: nowrap;
            text-align: left;
        }
    }
`;

const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;

    padding: 1em;

    border-bottom: 1px solid var(--grey-400);
    border-bottom-style: dashed;

    h2 {
        color: var(--grey-800);
        font-size: 2.5em;
    }

    h3 {
        color: var(--grey-800);
        font-size: 1.5em;
    }

    p {
        color: var(--grey-600);
        font-size: .9em;
    }

    .calendar-icon {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--grey-200);
        color: var(--grey-800);
        padding: 1em;
        border-radius: 50%;

        width: 24px;
        height: 24px;
    }
`;

const BookCredential = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1em;

    h3 {
        color: var(--grey-600);
        font-size: 1em;
        margin-bottom: 1em;
    }

    .circular-detail {
        width: 20em;
        height: 20em;
        background-color: var(--grey-200);
        border-radius: 50%;
        padding: 1em;


        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .price-tag {
        display: flex;
        /* flex-direction: column; */
        justify-content: space-around;
        align-items: center;
        gap: 2em;

        h2, p {
            color: var(--primary);
        }

        h2 {
            font-size: 2em;
            font-weight: 600;
            text-align: center;
        }

        span {
            margin: 0;
            font-size: .5em;
            align-items: center;
        }
    }

    .qr-code {
        p {
            color: var(--grey-800);
            font-size: .7em;
        }
    }
`;

export default Ticket;