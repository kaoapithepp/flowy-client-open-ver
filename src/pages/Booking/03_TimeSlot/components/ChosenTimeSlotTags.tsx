import React, { useState } from 'react';
import styled from 'styled-components';

// muis
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

interface TimeSlotButtonContext {
    elem?: any;
    targetArr?: any;
    targetFunc?: any;
    srcArr?: any;
    srcFunc?: any;
};

export const ChosenTimeSlotTags: React.FC<TimeSlotButtonContext> = ({ elem, targetFunc, targetArr, srcFunc, srcArr }) => {

    function handleChooseItem(e: any){
        e.preventDefault();

        targetFunc([...targetArr, elem]);

        srcFunc(srcArr.filter((item: any) => item.timeslot_id !== elem.timeslot_id));
    }
    
    return (
        <TimeTag id={elem.timeslot_id} onClick={handleChooseItem}>
            <p className="time">{elem.start_time} - {elem.end_time}<CancelRoundedIcon className="icon"/></p>
        </TimeTag>
    );
}

const TimeTag = styled.button<TimeSlotButtonContext>`
    border: none;
    border-radius: .6em;
    width: max-content;

    background-color: var(--primary);
    font-family: var(--brand-font);
    font-size: 1em;
    
    padding: 6px;
    
    cursor: pointer;
    
    .time {
        display: flex;
        color: var(--white) !important;
        align-items: center;
        gap: .3em;
        text-align: center;
    }

    .icon {
        transform: scale(.8);
    }

`;

export default ChosenTimeSlotTags;