import React from 'react';
import styled from 'styled-components';

const CreditCardPayment: React.FC = () => {
    return(
        <Container>
            <h4>ชื่อผู้ถือบัตร</h4>
            <input type='text' inputMode='text' placeholder='กรอกชื่อ-นามสกุล ที่แสดงบนบัตร' name='card-holder' maxLength={40} id='card-holder' autoComplete='off' required></input>
            <h4>หมายเลขบัตร</h4>
            <input type='text' inputMode='decimal' placeholder='0000 0000 0000 0000' name='card-number' maxLength={16} id='card-number' autoComplete='off' required></input>
            <div className='column-display'>
                <h4>วันหมดอายุ</h4>
                <h4></h4>
                <h4>CCV</h4>
            </div>
            <div className='column-display'>
                <select aria-label='exp-month' id='exp-month' placeholder='เดือน'>
                    <option value="month" selected disabled>เดือน</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <select aria-label='exp-year' id='exp-year' placeholder='ปี'>
                    <option value="year" selected disabled>ปี</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
                <input type='text' inputMode='decimal' placeholder='123' name='ccv-number' maxLength={3} id='ccv-number' autoComplete='off' required></input>
            </div>

        </Container>
    );
}

const Container = styled.div`
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: -8px auto 0px auto;

    input{
        width: 100%;
        padding: 5px 8px;
        margin: 2px 0px;
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        font-family: "IBM Plex Sans Thai";
        font-size: 16px;
    }

    select{
        width: 100%;
        height: 39px;
        padding: 5px 8px;
        margin: 2px 0px;
        display: inline-block;
        border-radius: 4px;
        background-color: #FFFFFF;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        font-family: "IBM Plex Sans Thai";
        font-size: 16px;
        color: var(--black);
    }

    .column-display{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        gap: 4px;

        h4{
            margin-top: 4px;
        }
    }
`;

export default CreditCardPayment;