import styled from 'styled-components';

export const ButtonTimeClick = styled.button`
    background-color: var(--secondary);
    border: none;
    color: var(--white);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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

    :hover {
        cursor: pointer;
    }
`;