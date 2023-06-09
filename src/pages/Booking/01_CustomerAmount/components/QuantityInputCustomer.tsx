import React, { useState } from 'react';
import styled from 'styled-components';

interface QuantityInputCustomerContext {
  initialValue: number;
  minValue?: number;
  maxValue?: number;
  dispatchFunc: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityInputCustomer: React.FC<QuantityInputCustomerContext> = ({ initialValue, minValue=1, maxValue, dispatchFunc }) => {
    const [quantity, setQuantity] = useState<number>(initialValue);

    const handleIncrement = () => {
        if (maxValue && quantity >= maxValue) return;
        setQuantity(quantity + 1);
        dispatchFunc(quantity + 1);
    };

    const handleDecrement = () => {
        if (minValue && quantity <= minValue) return minValue;
        if (quantity > 1) {
          setQuantity(quantity - 1);
          dispatchFunc(quantity - 1);
        }
    };

    return (
        <Container>
            <h2>จำนวน</h2>
            <h4>ระบุจำนวนผู้เข้าใช้บริการ</h4>
            <Section>
                <div className='flex-display'>
                    <ButtonDecrement onClick={handleDecrement}>-</ButtonDecrement>
                    <QuantityInput
                        type="text"
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                        min={minValue}
                        max={maxValue}
                        placeholder="จำนวน"
                    />
                    <ButtonIncrement onClick={handleIncrement}>+</ButtonIncrement>
                </div>
            </Section>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    .flex-display{
        display: flex;
        align-items: center;
    }
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
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

export default QuantityInputCustomer;