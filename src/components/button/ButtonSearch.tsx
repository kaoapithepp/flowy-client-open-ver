import styled from 'styled-components';

export const ButtonSearch = styled.button`
    background-color: var(--white);
    padding: 5px 0px;
    width: 100%;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    cursor: ${props => props.disabled ? "no-drop": "pointer"};

    text-align: left;
    font-family: var(--brand-font);
    font-size: medium;
    font-weight: 500;
    color: var(--gray-400);
`;