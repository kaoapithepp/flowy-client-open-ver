import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { TimeoutCard } from '../../components/card/TimeoutCard';
import { ButtonBack } from '../../components/button/ButtonBack';

//section
import PaymentDetail from './PaymentDetail';
import PaymentMethod from './PaymentMethod';
import FooterPayment from './FooterPayment';

//MUIs
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Payment: React.FC = () => {

    const navigate = useNavigate();

    function buttonBackClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/desk-select", { replace: false });
    }

    return(
        <Gradient>
            {/* <TimeoutCard /> */}
            <Section>
                <div>
                    <ButtonBack onClick={buttonBackClick}><ArrowBackRoundedIcon /></ButtonBack>
                </div>
                <div className='content-display'>
                    <div className='timeout'>
                        <h4 className='h4'>กรุณาชำระค่าบริการภายใน 5:00</h4>
                    </div>
                    <Container>
                        <PaymentDetail />
                    </Container>
                    <Container>
                        <PaymentMethod />
                    </Container>
                    <div className='position-footer'>
                        <FooterPayment />
                    </div>
                </div>
            </Section>
        </Gradient>
    );
}

const Section = styled.div`
    padding: 0px;
    max-height: 120vh;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;
    
    .h4{
        text-align: right;
        margin-bottom: 24px;
    }

    ::before{
        display: flex;
        content: '';
    }

    ::after{
        display: flex;
        content: '';
        padding-bottom: 69px;
    }

    .position-footer{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        margin: 0 auto;
    }

    .content-display{
        padding: 16px;
        margin-top: 12px;
    }

    .timeout{
        text-align: center;

        h1{
            font-size: 1.75rem;
        }
    }
`;

const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('/images/gradient-background2.png');
    background-size: 100%;
    background-repeat: no-repeat;
`;

const Container = styled.div`
    padding: 16px;
    background: var(--white);
    box-shadow: var(--shadow);
    border-radius: 16px;
    max-width: 1024px;
    margin: 16px auto;
`;


export default Payment;