import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import styled from "styled-components";
import QRCode from "react-qr-code";

// Global Components
import { BackButton } from "../../components/button/BackButton";

// Utils
import { dateReformat } from "../../utils/dateReformat";

// MUIs
import TableRestaurantRoundedIcon from '@mui/icons-material/TableRestaurantRounded';
import AccessibilityRoundedIcon from '@mui/icons-material/AccessibilityRounded';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import { BorderedGreyButton } from "../../components/button/BorderedGreyButton";

const HistoryPage: React.FC = () => {
    const [bookingHistory, setBookingHistory] = useState<any>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const isThereToken = localStorage.getItem('flowyToken')
        ? JSON.parse(localStorage.getItem('flowyToken') as string)
        : null;

        if(isThereToken){
            try {
                axios.get(`${import.meta.env.VITE_FLOWY_API_ROUTE}/booking/`,{
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    setBookingHistory(res.data);
                }, (unres) => {
                    alert(unres.response.data);
                })
            } catch (err: any) {
                alert(err.message);
            }
        }
    },[]);

    async function handleShowTicket(bookId: string){
        navigate(`/ticket/${bookId}`, { replace: false });
    }
    
    return (
        <>
            <Helmet>
                <title>Booking History | Flowy</title>
            </Helmet>
            <BackButton />
            <Container>
                <Header>
                    <h1>ประวัติการจองสเปซ</h1>
                </Header>
                {bookingHistory.map((elem: any, key: any) => {
                    return (
                        <InfoSection>
                            <div className="grid-display">
                                <div>
                                    <p>{dateReformat(elem.createdAt)}</p>
                                    <h2>{elem.place_name}</h2>
                                    <div className="icon-detail">
                                        <TableRestaurantRoundedIcon />
                                        <p>{elem.desk_name}</p>
                                    </div>
                                    <div className="small-detail">
                                        <div className="icon-detail">
                                            <AccessibilityRoundedIcon />
                                            <p>{elem.total_bk_seat} ที่นั่ง</p>
                                        </div>
                                        <div className="icon-detail">
                                            <ScheduleOutlinedIcon />
                                            <p>{elem.total_bk_hr} hrs</p>
                                        </div>
                                        <div className="icon-detail">
                                            <p>฿ {elem.total_bk_price}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="qr-wrapper">
                                    <div className="qr-thumbnail">
                                        <QRCode
                                            fgColor="var(--grey-900)"
                                            bgColor="var(--grey-200)"
                                            size={256}
                                            style={{ height: "140px", maxWidth: "100%", width: "100%" }}
                                            viewBox={`0 0 256 256`}
                                            value={String(elem.booking_id)}
                                            />
                                        
                                    </div>
                                </div>
                            </div>
                            <BorderedGreyButton onClick={e => handleShowTicket(elem.booking_id)}>Show more detail</BorderedGreyButton>
                        </InfoSection>
                    );
                })}
            </Container>
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
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    padding: 1em;
    margin-top: 5em;

    h1 {
        line-height: 1em;
        font-size: 4em;
        font-weight: 600;
        color: var(--grey-900);
        width: 90%;
    }

    
`;

const InfoSection = styled.div`
    padding: 1em 1em 0 1em;

    border-bottom: 1px solid var(--grey-400);
    border-bottom-style: dashed;

    h2 {
        color: var(--blue-notion);
        font-size: 2.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 256px;
        white-space: nowrap;
        text-align: left;
    }

    p {
        color: var(--grey-600);
        font-size: .9em;
    }

    .grid-display {
        display: grid;
        grid-template-columns: 2fr 1fr;

        align-items: center;
        gap: 1em;
    }


    .icon-detail {
        display: flex;
        gap: .2em;
        color: var(--grey-600);
    }
    
    .small-detail {
        display: flex;
        gap: 1em;
    }

    .qr-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .qr-thumbnail {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        background-color: var(--grey-200);
        color: var(--grey-800);
        padding: 1em;
        border-radius: 50%;

        width: 52px;
        height: 52px;
    }

    .stat-tag {
        margin: 6px 0;
        background-color: var(--green-notion);
        padding: 6px;
        width: fit-content;
        border-radius: 0.5rem;
        color: var(--grey-900);
        font-size: 0.7em;
        /* margin-bottom: 0; */
    }
`;

export default HistoryPage;