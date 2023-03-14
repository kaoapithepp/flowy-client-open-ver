import styled from "styled-components";

export const BorderedGreyButton = styled.button`
    background-color: var(--white);
    color: var(--grey-400);
    border: 1px solid var(--grey-400);
    border-radius: 8px;
    padding: 8px 0px;
    margin: 1em 0;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    
    text-align: center;
    font-size: medium;
    font-family: var(--brand-font);
    font-weight: 500;
    transition: .2s;
    
    :hover {
        color: var(--grey-600);
        border-color: var(--grey-600);
    }
`;