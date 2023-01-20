import React from 'react';
import styled from 'styled-components';

// Global Components
import { ButtonDate } from '../../components/button/ButtonDate';
import { ButtonDateClick } from '../../components/button/ButtonDateClick';

interface Props {
    date: string;
    month: string;
    year: string;
};

const DateBooking: React.FC<Props>= (data: Props) => {

    // function exportDateData( ) {
    //     return(
    //         <div>
    //             {
    //                 date_dummy.map((data: DateData)=>(
    //                     <div>
    //                         <DateBooking date={data.date} month={data.month} year={data.year} />
    //                     </div>
    //                 ))
    //             }
    //         </div>
    //     )
    // }


    return(
        <Container>
            <div className='column-display'>
                <h2>วันที่</h2>
                <div className='row-display'>
                    <h2>มกราคม</h2>
                    <h2>2566</h2>
                </div>
            </div>
            <Date>
                <ButtonDate><h4>1</h4></ButtonDate>
                <ButtonDateClick><h4>2</h4></ButtonDateClick>
                <ButtonDate><h4>3</h4></ButtonDate>
                <ButtonDate><h4>4</h4></ButtonDate>
                <ButtonDate><h4>5</h4></ButtonDate>
                <ButtonDate><h4>6</h4></ButtonDate>
                <ButtonDate><h4>7</h4></ButtonDate>
                <ButtonDate><h4>8</h4></ButtonDate>
                <ButtonDate><h4>9</h4></ButtonDate>
                <ButtonDate><h4>10</h4></ButtonDate>
                <ButtonDate><h4>11</h4></ButtonDate>
                <ButtonDate><h4>12</h4></ButtonDate>
            </Date>
        </Container>
    );
}

const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;

    .row-display{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;

    }

    .column-display{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Date = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    width: 100%;
    overflow-x: scroll;
    gap: 2rem;

`;

export default DateBooking;