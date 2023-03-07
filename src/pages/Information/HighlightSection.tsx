import React from 'react';
import styled from 'styled-components';

// Global Components
import { IconHighlightCard } from '../../components/icon/IconAmenityCard';

// Data
import { IconHighlightCardDetail } from '../../components/data/IconHighlightCardDetail';

const HighlightSection: React.FC = () => {
    return(
        <Container>
            {IconHighlightCardDetail.map((elem, key) => {
            return <IconHighlightCard {...elem} />
            })}
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 16px;
    align-items: center;
    align-content: center;
    justify-items: start;
`;

export default HighlightSection;

