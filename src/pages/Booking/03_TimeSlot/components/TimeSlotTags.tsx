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

export const TimeSlotTags: React.FC<TimeSlotButtonContext> = ({ elem, targetFunc, targetArr, srcFunc, srcArr }) => {
    const [isSelected, setIsSelected] = useState(false);

    function handleUnChooseItem(e: any) {
        e.preventDefault();

        setIsSelected(!isSelected);

        // srcFunc([...srcArr, elem]);

        targetFunc(targetArr.filter((item: any) => item.timeslot_id !== elem.timeslot_id));
    }

    function handleChooseItem(e: any){
        e.preventDefault();

        setIsSelected(!isSelected);

        targetFunc([...targetArr, elem]);
        
        // srcFunc(srcArr.filter((item: any) => item.timeslot_id !== elem.timeslot_id));
    }
    
    return (
        <>
            {isSelected ? 
                <ChosenTimeTag
                    onClick={handleUnChooseItem}
                    disabled={elem.status != 'vacant' ? true : false}>
                    {elem.start_time} - {elem.end_time}
                </ChosenTimeTag>
                : 
                <TimeTag
                    onClick={handleChooseItem}
                    disabled={elem.status != 'vacant' ? true : false}>
                    {elem.start_time} - {elem.end_time}
                </TimeTag>
            }
        </>
    );
}

const TimeTag = styled.button<TimeSlotButtonContext>`
    border: 1px solid var(--secondary);
    border-radius: .6em;
    width: 100%;

    padding: 1em;

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

const ChosenTimeTag = styled.button<TimeSlotButtonContext>`
    border: 1px solid var(--secondary);
    border-radius: .6em;
    width: 100%;

    background-color: var(--primary);
    font-family: var(--brand-font);
    font-size: 1em;
    text-align: center;
    
    padding: 1em;
    
    cursor: pointer;
    
    
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white) !important;
    align-items: center;
    gap: .3em;
    text-align: center;
    

    .icon {
        transform: scale(.8);
    }

`;

export default TimeSlotTags;