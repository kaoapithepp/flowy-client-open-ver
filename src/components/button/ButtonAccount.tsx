import styled from 'styled-components';

export const ButtonAccount = styled.button`
    display: flex;
    background: var(--white);
    border: 1px solid var(--grey-200);
    box-shadow: var(--shadow);
    color: var(--black);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.disabled ? "no-drop": "pointer"};
`;