import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { ButtonBack } from '../../components/button/ButtonBack';

//section
import FigureSection from './FigureSection';
import DetailSection from './DetailSection';
import HighlightSection from './HighlightSection';
import FooterInformation from './FooterInformation';

//MUIs
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Information: React.FC = () => {

    const navigate = useNavigate();

    function buttonBackClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/explore", { replace: false });
    }

    return(
        <Section>
            <ButtonBack onClick={buttonBackClick}><ArrowBackRoundedIcon /></ButtonBack>
            <FigureSection />
            <DetailSection />
            <HighlightSection />
            <div className='position-footer'>
                <FooterInformation />
            </div>
        </Section>
    );
}

const Section = styled.div`
    padding: 0px;
    max-height: 120vh;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;
    
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
`;

export default Information;

