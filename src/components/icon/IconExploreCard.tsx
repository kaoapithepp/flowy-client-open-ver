import React from 'react';

// MUIs
import SmokeFreeRoundedIcon from '@mui/icons-material/SmokeFreeRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';

import styled from 'styled-components';

interface CardData {
    detail: string;
    icon: string;
};

export const IconExploreCard: React.FC<CardData>= (elem: CardData) => {

    function renderSwitchCase(action: CardData){
        switch(action.icon){
            case 'SmokeFreeRoundedIcon':
                return <SmokeFreeRoundedIcon className="large-icon" />;
            case 'VolumeOffRoundedIcon':
                return <VolumeOffRoundedIcon className="large-icon" />;
            default:
                return;
        }
    }
    
    return (
        <Card>
            <Icon>
                {renderSwitchCase(elem)}
            </Icon>
                <p>
                    {elem.detail}
                </p>
        </Card>
    );
}

const Card = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
    font-family: var(--brand-font);
`;

const Icon = styled.div`
   width: 16px;
   height: 16px;
   display: flex;
   justify-content: center;
   align-items: center;
`;