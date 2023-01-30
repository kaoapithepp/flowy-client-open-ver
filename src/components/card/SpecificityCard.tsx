import React from 'react';
import styled from 'styled-components';

// Global Components
import { IconSpecificityCard } from '../icon/IconSpecificityCard';

// Data
import { IconSpecificityCardDetail } from '../data/IconSpecificityCardDetail';

import { IconFilterCardDetail } from "..//data/IconFilterCardDetail";

export const SpecificityCard: React.FC = () => {
    return(
        <Card>
            <h2>ความเฉพาะเจาะจง</h2>
            {IconSpecificityCardDetail.map((elem, key) => {
            return <IconSpecificityCard {...elem} />
            })}
        </Card>
    );
}

const Card = styled.div`
    display: grid;
    padding: 16px;
    background: var(--white);
    border: 1px solid var(--grey-200);
    border-radius: 16px;
    margin-bottom: 16px;
    height: fit-content;

    h2{
        margin-bottom: 8px;
    }
`;