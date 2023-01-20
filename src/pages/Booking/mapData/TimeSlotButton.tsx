import React from 'react';

// Global Components
import { ButtonTime } from '../../../components/button/ButtonTime';
import { ButtonTimeClick } from '../../../components/button/ButtonTimeClick';
import { ButtonTimeUnavailable } from '../../../components/button/ButtonTimeUnavailable';

interface Props {
    id: string;
    start_time: string;
    end_time: string;
};

const TimeSlotButton: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <ButtonTime>{props.start_time} - {props.end_time}</ButtonTime>
            <ButtonTimeClick>{props.start_time} - {props.end_time}</ButtonTimeClick>
            <ButtonTimeUnavailable>{props.start_time} - {props.end_time}</ButtonTimeUnavailable>
        </div>
    );
}

export default TimeSlotButton;