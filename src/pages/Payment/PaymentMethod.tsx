import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


// Global Components
import { ButtonPayment } from '../../components/button/ButtonPayment';

//MUIs
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';

//section
import CreditCardPayment from './CreditCardPayment';
import QRcodePayment from './QRcodePayment';

const PaymentMethod: React.FC = () => {

    const [openCreditCardPayment, setCreditCardPayment] = useState<Boolean>(false);
    const [openQRcodePayment, setQRcodePayment] = useState<Boolean>(false);

    const handleCreditCardPayment = (state: Boolean) => {
        setCreditCardPayment(state);
    }
    const handleQRcodePayment = (state: Boolean) => {
        setQRcodePayment(state);
    }

    let render_CreditCardPayment = null
    openCreditCardPayment? (
        render_CreditCardPayment = <CreditCardPayment />
    ):(render_CreditCardPayment = null)

    let render_QRcodePayment = null
    openQRcodePayment? (
        render_QRcodePayment = <QRcodePayment />
    ):(render_QRcodePayment = null)
    
    return(
        <Section>
            <h2>จ่ายด้วย</h2>
            <Container>
                <ButtonPayment onClick={() => handleCreditCardPayment(!openCreditCardPayment)}>
                    <Icon>
                        <CreditCardRoundedIcon />
                    </Icon>
                    บัตรเครดิต หรือบัตรเดบิต
                    <Icon>
                        <CheckBoxOutlineBlankRoundedIcon />
                    </Icon>
                </ButtonPayment>
                {render_CreditCardPayment}
                {/* <CreditCardPayment /> */}
            </Container>
            <Container>
                <ButtonPayment onClick={() => handleQRcodePayment(!openQRcodePayment)}>
                    <Icon>
                        <QrCode2RoundedIcon />
                    </Icon>
                    QR Code
                    <Icon>
                        <CheckBoxOutlineBlankRoundedIcon />
                    </Icon>
                </ButtonPayment>
                {render_QRcodePayment}
                {/* <QRcodePayment /> */}
            </Container>
        </Section>
    );
}

const Section = styled.div`
    padding: 0px;
    max-width: 500px;
    margin: 0 auto;
`;

const Container = styled.div`
    padding: 0px;
    max-width: 500px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    justify-items: center;
`;

const Icon = styled.div`
   width: 16px;
   height: 16px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export default PaymentMethod;