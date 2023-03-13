import React from 'react';
import styled from 'styled-components';

const SuccessReg: React.FC = () => {
    return(
        <Section>
            <h1>สร้างบัญชีสำเร็จ</h1>
            <img src='/images/example-scene-2.png' alt="" />
            <p>โปรดรอซักครู่</p>
            <p>ระบบกำลังนำทางสู่หน้าลงชื่อเข้าใช้</p>
        </Section>
    );
}

const Section = styled.div`
    padding: 16px;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    p{
        color: var(--grey-600);
    }

    img{
        width: 70%;
        height: 100%;
        margin: 32px auto;
    }
`;

export default SuccessReg;