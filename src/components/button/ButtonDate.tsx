import styled from 'styled-components';

export const ButtonDate = styled.button`
    background-color: var(--white);
    border: none;
    color: var(--black);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 40px;
    height: 40px;
    margin: 8px auto;
    padding: 0px 15px;

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