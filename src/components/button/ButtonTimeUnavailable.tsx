import styled from 'styled-components';

export const ButtonTimeUnavailable = styled.button`
    background-color: var(--grey-200);
    border: none;
    color: var(--grey-400);
    box-shadow: var(--shadow);
    border-radius: 4px;
    width: 100%;
    height: 40px;
    margin: 8px auto;

    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: medium;
    font-family: var(--brand-font);
    font-weight: 500;
    cursor: not-allowed;
`;