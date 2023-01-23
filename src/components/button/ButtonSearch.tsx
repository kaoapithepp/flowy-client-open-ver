import styled from 'styled-components';

export const ButtonSearch = styled.button`
    background-color: var(--white);
    padding: 5px 0px;
    width: 100%;
    border-radius: 25px;
    border: none;
    box-shadow: var(--shadow);
    cursor: ${props => props.disabled ? "no-drop": "pointer"};

    text-align: left;
    font-family: var(--brand-font);
    font-size: medium;
    font-weight: 500;
    color: var(--grey-400);
`;