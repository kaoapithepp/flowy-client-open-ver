import React, { useState } from 'react';

// Global Components
import { ButtonTime } from '../../../../components/button/ButtonTime';

interface TimeSlotButtonContext {
    id?: string;
    status: string;
    start_time: string;
    end_time: string;
};

const TimeSlotButton: React.FC<TimeSlotButtonContext> = ({ status, start_time, end_time }) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <>
            <ButtonTime
                disabled={status == 'vacant' ? false : true}
                isSelected={isSelected}
                onClick={e => setIsSelected(!isSelected)}
                >
                    {start_time} - {end_time}
            </ButtonTime>
        </>
    );
}

export default TimeSlotButton;