import styled from 'styled-components';

export const ButtonPayment = styled.button`
    background-color: var(--white);
    color: #757575;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    padding: 5px 16px;
    margin: 16px 0px;
    width: 100%;
    cursor: pointer;
    
    display: grid;
    text-align: left;
    grid-template-columns: 2em 1fr auto;
    align-items: center;
    font-size: medium;
    font-family: var(--brand-font);
    font-weight: 500;

    :hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
`;