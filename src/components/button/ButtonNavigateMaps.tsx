import styled from 'styled-components';

export const ButtonNavigateMaps = styled.button`
    background-color: ${props => props.disabled ? "#EEEEEE" : "#FFFFFF"};
    padding: 8px 0px;
    margin-top: 16px;
    width: 100%;
    border-radius: 8px;
    border: none;
    box-shadow: var(--shadow);
    cursor: ${props => props.disabled ? "no-drop": "pointer"};

    display: inline-flex;
    justify-content: center;
    gap: 1rem;
    font-family: var(--brand-font);
    font-size: medium;
    font-weight: 500;
    color: var(--black);

    transition: .3s;

    :hover {
        transform: scale(101%);
        background-color: ${props => props.disabled ? "#FFFFFF" : "#EEEEEE"};
    }
`;