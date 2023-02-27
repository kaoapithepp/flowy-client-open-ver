import React from 'react';
import styled from 'styled-components';

// Global Components
import { IconDeskSelectCard } from '../icon/IconDeskSelectCard';

// Data
import { IconDeskSelectDetail } from '../data/IconDeskSelectDetail';

export const DeskSelectCard: React.FC = () => {
    return(
        <Layout>
            {IconDeskSelectDetail.map((elem, key) => {
            return <IconDeskSelectCard {...elem} />
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