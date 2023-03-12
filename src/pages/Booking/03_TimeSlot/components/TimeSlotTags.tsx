import React, { useState } from 'react';
import styled from 'styled-components';

interface TimeSlotButtonContext {
    elem?: any;
    targetArr?: any;
    targetFunc?: any;
    srcArr?: any;
    srcFunc?: any;
};

export const TimeSlotTags: React.FC<TimeSlotButtonContext> = ({ elem, targetFunc, targetArr, srcFunc, srcArr }) => {

    function handleChooseItem(e: any){
        e.preventDefault();

        targetFunc([...targetArr, elem]);
        
        srcFunc(srcArr.filter((item: any) => item.timeslot_id !== elem.timeslot_id));
    }
    
    return (
        <TimeTag
            onClick={handleChooseItem}
            disabled={elem.status != 'vacant' ? true : false}>
            {elem.start_time} - {elem.end_time}
        </TimeTag>
    );
}

const TimeTag = styled.button<TimeSlotButtonContext>`
    border: 1px solid var(--secondary);
    border-radius: .6em;
    width: max-content;

    padding: 8px;

    color: var(--secondary);
    background-color: var(--white);
    font-family: var(--brand-font);
    font-size: 1em;
    text-align: center;

    cursor: pointer;

    :disabled{
        border: none;
        background-color: var(--grey-200);
        color: var(--grey-400);
        cursor: not-allowed;
    }
`;

export default TimeSlotTags;