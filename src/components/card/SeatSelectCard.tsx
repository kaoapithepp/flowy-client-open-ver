import React from 'react';
import styled from 'styled-components';

// Global Components
import { IconPlaceCategoryCard } from '../icon/IconSeatSelectCard';

// Data
import { IconSeatSelectDetail } from '../data/IconSeatSelectDetail';

export const SeatSelectCard: React.FC = () => {
    return(
        <Layout>
            {IconSeatSelectDetail.map((elem, key) => {
            return <IconPlaceCategoryCard {...elem} />
            })}
        </Layout>
    );
}

const Layout = styled.div`

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px 16px;
    }
    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px 16px;
    }

    @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px 16px;        
    }
`;