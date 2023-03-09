import React from 'react';
import styled from 'styled-components';

const PaymentDetail: React.FC = () => {
    return(
        <Container>
            <Wrapper>
                <h2>รายละเอียดค่าใช้บริการ</h2>
                <div className="detail">
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
                </div>
                <div className="total-price">
                    <h3>รวม (THB)</h3>
                    <h3>฿360.00</h3>
                </div>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    padding: 16px;
    background-color: var(--white);
    box-shadow: var(--shadow);
    border-radius: 16px;
    max-width: 600px;
    margin: 16px auto;
`;

const Wrapper = styled.div`
    padding: 0px;
    max-width: 500px;
    margin: 0 auto;

    .total-price {
        padding-top: 8px;
        display: flex;
        justify-content: space-between;
    }

    .detail {
        padding-bottom: 8px;
        border-bottom: 1px solid var(--grey-300);
        
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
    }
`;

export default PaymentDetail;