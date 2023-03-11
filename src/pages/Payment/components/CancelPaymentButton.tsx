import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { BorderedButton } from '../../../components/button/BorderedButton';

const CancelPaymentButton: React.FC = () => {

    const navigate = useNavigate();

    function handleCancelPaymentClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        // axios cancel route

        navigate("/explore", { replace: true });
    }


    return (
        <Wrapper>
            <p>เมื่อกดยกเลิกแล้ว คุณจะต้องทำการจองใหม่ตั้งแต่เริ่มต้น</p>
            <div className='button-size'>
                <BorderedButton onClick={handleCancelPaymentClick}>ยกเลิกรายการจองนี้</BorderedButton>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 10px;
    
    p {
        margin-bottom: -10px;
        font-size: 12px;
        color: var(--grey-600);
    }
    
    .button-size{
        width: 100%;
    }
`;

export default CancelPaymentButton;