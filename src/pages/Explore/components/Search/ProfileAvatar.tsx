import styled from 'styled-components';

interface IButtonAccount {
    readonly bgImg: string;
}

export const ProfileAvatar = styled.button<IButtonAccount>`
    display: flex;
    border: 1px solid var(--grey-200);
    box-shadow: var(--shadow);
    color: var(--black);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background: ${props => `url(${props.bgImg}) no-repeat center`};
    background-size: cover;
    cursor: pointer;
`;