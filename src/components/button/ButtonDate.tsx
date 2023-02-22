import styled from 'styled-components';

export const ButtonDate = styled.button`
    background-color: var(--white);
    border: none;
    color: var(--black);
    box-shadow: var(--shadow);
    border-radius: 4px;
    width: 40px;
    height: 40px;
    margin: 8px auto;
    padding: 0px 15px;

    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: medium;
    font-family: var(--brand-font);
    font-weight: 500;


    :hover {
        cursor: pointer;
        background-color: var(--secondary);
        color: var(--white);
    }
`;