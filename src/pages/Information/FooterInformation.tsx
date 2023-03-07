import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { Button } from '../../components/button/Button';

const FooterInformation: React.FC = () => {

    const navigate = useNavigate();

    function buttonInformationClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/booking-number-of-customers", { replace: false });
    }

    return(
        <Container>
            <Section>
                <div className='button-size'>
                    <Button onClick={buttonInformationClick}>จอง</Button>
                </div>
            </Section>
        </Container>
    );
}

const Container = styled.div`
    position: sticky;
    bottom: 0;
    z-index: 2;
    max-width: 100%;
    margin: 0 auto;
    width: 100%;
`;

const Section = styled.div`
    display: flex;
    background: linear-gradient(0deg, var(--white) 20%, rgba(247, 25, 136, 0) 100%);
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    
    .button-size{
        width: 10em;
    }
`;

export default FooterInformation;