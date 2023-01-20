import React from "react";
import { time_dummy } from "../data/time_dummy";
import TimeSlotButton from "./TimeSlotButton";

interface Props {
    id: string;
    start_time: string;
    end_time: string;
};

function TimeSlotDataMap( ) {
    return(
        <div>
            {
                time_dummy.map((props: Props)=>(
                    <TimeSlotButton id={props.id} start_time={props.start_time} end_time={props.end_time} />
                ))
            }
        </div>
    )
}

export default TimeSlotDataMap;