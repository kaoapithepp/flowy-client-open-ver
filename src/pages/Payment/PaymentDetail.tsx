import React from 'react';
import styled from 'styled-components';

const PaymentDetail: React.FC = () => {
    return(
        <Container>
            <h2>รายละเอียดราคา</h2>
            <Detail>
                <div className='column-display'>
                    <h3>ค่าใช้บริการสเปซ</h3>
                    <h3>฿60.00</h3>
                </div>
                <div className='column-sub-display'>
                    <p>จำนวนผู้ใช้บริการสเปซ</p>
                    <p>x3</p>
                    <p>จำนวนชั่วโมงในการใช้บริการสเปซ</p>
                    <p>x2</p>
                </div>
                {/* <div className='column-display'>
                    <h3>ภาษี (vat 7%)</h3>
                    <h3>฿21.00</h3>
                </div> */}
            </Detail>
            <TotalPrice>
                <h3>รวม (THB)</h3>
                <h3>฿360.00</h3>
            </TotalPrice>
        </Container>
    );
}

const Container = styled.div`
    padding: 0px;
    max-width: 500px;
    margin: 0 auto;
`;

const Detail = styled.div`
    padding-bottom: 8px;
    border-bottom: 1px solid #E0E0E0;
    
    h3{
        color: var(--gray-600);
    }
    
    p{
        color: var(--gray-600);
        font-size: 14px;
    }
    
    .column-display{
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }

    .column-sub-display{
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding-left: 16px; 
    }
`;

const TotalPrice = styled.div`
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
`;

export default PaymentDetail;