import styled from 'styled-components';

export const ButtonAuth = styled.button`
    background-color: ${props => props.disabled ? "#F5F5F5" : "#EEEEE"};
    padding: 5px 0px;
    margin: 16px 0px;
    width: 100%;
    border-radius: 8px;
    border: none;
    cursor: ${props => props.disabled ? "no-drop": "pointer"};

    display: flex;
    align-items: center;
    text-align: center;
    font-family: var(--brand-font);
    font-size: medium;
    font-weight: 500;
    color: var(--black);

    transition: .3s;

    :hover {
        transform: scale(101%);
        background-color: ${props => props.disabled ? "#F5F5F5" : "#E0E0E0"};
    }
`;