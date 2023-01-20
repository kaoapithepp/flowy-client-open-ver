import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { Button } from '../../components/button/Button';
import { ButtonClear } from '../../components/button/ButtonClear';

const FooterFilter: React.FC = () => {

    const navigate = useNavigate();

    function buttonFilterClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/explore", { replace: false });
    }

    return(
        <Container>
            <Section>
                <div className='button-size'>
                    <ButtonClear>ล้างทั้งหมด</ButtonClear>
                </div>
                <div className='button-size'>
                    <Button onClick={buttonFilterClick}>แสดงผลลัพธ์</Button>
                </div>
            </Section>
        </Container>
    );
}

const Container = styled.div`
    position: sticky;
    bottom: 0;
    z-index: 2;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
`;

const Section = styled.div`
    display: flex;
    background-color: var(--white);
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    
    .button-size{
        width: 10em;
    }
`;

export default FooterFilter;