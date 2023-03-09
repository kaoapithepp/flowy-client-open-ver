import React, { useState } from 'react';

// Global Components
import { ButtonTime } from '../../../components/button/ButtonTime';

interface Props {
    id?: string;
    status: string;
    start_time: string;
    end_time: string;
};

const TimeSlotButton: React.FC<Props> = ({ status, start_time, end_time }) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <>
            <ButtonTime
                disabled={status == 'occupied' ? true : false}
                isSelected={isSelected}
                onClick={e => setIsSelected(!isSelected)}
                >
                    {start_time} - {end_time}
            </ButtonTime>
        </>
    );
}

export default TimeSlotButton;