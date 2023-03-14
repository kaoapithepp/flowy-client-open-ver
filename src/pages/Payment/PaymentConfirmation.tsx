import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// Global Components
import LoadingScreen from '../../components/ui/LoadingScreen'

const PaymentConfirmation = () => {

    const { bookId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const isThereToken = localStorage.getItem('flowyToken')
        ? JSON.parse(localStorage.getItem('flowyToken') as string)
        : null;

        axios.put(`${import.meta.env.VITE_FLOWY_API_ROUTE}/booking/${bookId}`, {},{
            headers: {
                Authorization: `Bearer ${isThereToken}`
            }
        })
        .then(res => {
            navigate(`/ticket/${bookId}`, { replace: true });
        }, (unres) => {
            alert(unres.response.data);
            navigate("/", { replace: true });
        });

    }, []);

    return (
        <>
            <LoadingScreen customMessage="รอสักครู่ การทำงานรูปแบบใหม่กำลังจะเริ่มขึ้น" />
        </>
    )
}

export default PaymentConfirmation