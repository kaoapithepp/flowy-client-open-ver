import React from 'react';

// MUIs
import SmokeFreeRoundedIcon from '@mui/icons-material/SmokeFreeRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';

import styled from 'styled-components';

interface CardData {
    detail: string;
    icon: string;
};

export const IconSpecificityCard: React.FC<CardData>= (elem: CardData) => {

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
            <Container>
                <Icon>
                    {renderSwitchCase(elem)}
                </Icon>
                    <p>
                        {elem.detail}
                    </p>
                <input type="checkbox" id="" name="" value="" />
            </Container>
        </Card>
    );
}

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    font-family: var(--brand-font);
`;

const Container = styled.div`
    display: grid;
    margin-bottom: 4px;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1rem;
    width: 100%;

    input{
        height: 24px;
        width: 24px;
    }
`;

const Icon = styled.div`
   width: 24px;
   height: 24px;
   display: flex;
   justify-content: center;
   align-items: center;
`;