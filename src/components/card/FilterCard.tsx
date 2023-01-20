import React from 'react';
import styled from 'styled-components';

// Global Components
import { IconFilterCard } from '../icon/IconFilterCard';

// Data
import { IconFilterCardDetail } from "..//data/IconFilterCardDetail";

export const FilterCard: React.FC = () => {
    return(
        <Card>
            <h2>สิ่งอำนวยความสะดวก</h2>
            {IconFilterCardDetail.map((elem, key) => {
            return <IconFilterCard {...elem} />
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