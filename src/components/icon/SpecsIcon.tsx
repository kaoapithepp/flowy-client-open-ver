import React from 'react';

// MUIs
import SmokeFreeRoundedIcon from '@mui/icons-material/SmokeFreeRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LandscapeIcon from '@mui/icons-material/Landscape';

import styled from 'styled-components';

interface ISpec {
    icon: string;
    label?: string;
}

export const SpecsIcon: React.FC<ISpec> = ({ icon, label }) => {

    function renderSwitchCase(action: string){
        switch(action){
            case 'SmokeFreeRoundedIcon':
                return <SmokeFreeRoundedIcon />;
            case 'VolumeOffRoundedIcon':
                return <VolumeOffRoundedIcon />;
            case 'SmokingRoomsIcon':
                return <SmokingRoomsIcon />
            case 'VolumeUpIcon':
                return <VolumeUpIcon />
            case 'LandscapeIcon':
                return <LandscapeIcon />
            default:
                return;
        }
    }
    
    return (
        <Card>
            <Icon>
                { renderSwitchCase(icon) }
            </Icon>
                <p>{label ? label : null}</p>
        </Card>
    );
}

const Card = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: .5rem;
    font-family: var(--brand-font);
`;

const Icon = styled.div`
   width: 16px;
   height: 16px;
   display: flex;
   justify-content: center;
   align-items: center;
`;