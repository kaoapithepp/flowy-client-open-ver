import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { BorderedButton } from '../../../components/button/BorderedButton';

const CancelPaymentButton: React.FC = () => {

    return (
        <Wrapper>
            <p>เมื่อกดยกเลิกแล้ว คุณจะต้องทำการจองใหม่ตั้งแต่เริ่มต้น</p>
            <div className='button-size'>
                <BorderedButton>ยกเลิกรายการจองนี้</BorderedButton>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    
`;

export default CancelPaymentButton;