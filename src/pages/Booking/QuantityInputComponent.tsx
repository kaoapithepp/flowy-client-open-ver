import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  initialValue: number;
  minValue?: number;
  maxValue?: number;
}

const QuantityInputComponent: React.FC<Props> = ({ initialValue, minValue, maxValue }) => {
    const [quantity, setQuantity] = useState(initialValue);

    const handleIncrement = () => {
        if (maxValue && quantity >= maxValue) return;
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (minValue && quantity <= minValue) return;
        setQuantity(quantity - 1);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (isNaN(value)) return;
        if (minValue && value < minValue) return setQuantity(minValue);
        if (maxValue && value > maxValue) return setQuantity(maxValue);
        setQuantity(value);
    };

    return (
        <Container>
            <h2>จำนวน</h2>
            <Quantity>
                <h4>ระบุจำนวนผู้เข้าใช้บริการ</h4>
                <div className='flex-display'>
                    <ButtonDecrement onClick={handleDecrement}>-</ButtonDecrement>
                    <QuantityInput
                        type="number"
                        value={quantity}
                        onChange={handleChange}
                        min={minValue}
                        max={maxValue}
                    />
                    <ButtonIncrement onClick={handleIncrement}>+</ButtonIncrement>
                </div>
            </Quantity>
            <QuantityAvailable><p>เหลืออยู่ 9 ที่นั่ง</p></QuantityAvailable>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;
    
    .flex-display{
        display: flex;
        align-items: center;
    }
`;

const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
    
const ButtonDecrement = styled.button`
    height: 40px;
    width: 40px;
    border: none;
    background: var(--white);
    box-shadow: var(--shadow);
    border-radius: 4px 0px 0px 4px;
    cursor: pointer;
    color: var(--grey-800);

    font-family: var(--brand-font);
    font-size: 16px;
    font-weight: 500;

    &:hover {
        background-color: ${props => props.disabled ? "#ffffff" : "#eeeeee"};
    }
`;
    
const ButtonIncrement = styled.button`
    height: 40px;
    width: 40px;
    border: none;
    background: var(--white);
    box-shadow: var(--shadow);
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
    color: var(--grey-800);

    font-family: var(--brand-font);
    font-size: 16px;
    font-weight: 500;
    
    &:hover {
        background-color: ${props => props.disabled ? "#ffffff" : "#eeeeee"};
    }
`;
            
const QuantityInput = styled.input`
    width: 3rem;
    height: 1.5rem;
    border: none;
    background: var(--white);
    box-shadow: var(--shadow);
    border-radius: 0px;
    padding: 0.5rem;
    margin: 0 1px;
    text-align: center;
    
    font-family: var(--brand-font);
    font-size: 16px;
    font-weight: 500;
`;

const QuantityAvailable = styled.div`
    display: flex;
    padding: 8px 21px 0px 0px;
    align-items: center;
    justify-content: end;

    p{
        color: var(--secondary);
    }
`;

export default QuantityInputComponent;