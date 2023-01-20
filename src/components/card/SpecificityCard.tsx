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
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    border-radius: 16px;
    margin-bottom: 16px;

    h2{
        margin-bottom: 8px;
    }
`;