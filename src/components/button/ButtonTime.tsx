import styled from 'styled-components';

interface ButtonPropsContext {
    isSelected: boolean;
}

export const ButtonTime = styled.button<ButtonPropsContext>`
    background-color: ${({ isSelected }) => !isSelected ? 'var(--white)' : 'var(--secondary)'};
    color: ${({ isSelected }) => !isSelected ? 'var(--black)' : 'var(--white)'};
    border: none;
    box-shadow: var(--shadow);
    border-radius: .5em;
    width: 100%;
    min-height: 40px;
    margin: 8px 0px;

    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: medium;
    font-family: var(--brand-font);
    font-weight: 500;
    cursor: pointer;

    :disabled{
        background-color: var(--grey-200);
        color: var(--grey-400);
        cursor: not-allowed;
    }
`;