import styled from 'styled-components';

export const ButtonBack = styled.button`
    display: flex;
    position: fixed;
    z-index: 2;
    margin: 16px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    color: var(--black);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.disabled ? "no-drop": "pointer"};
`;