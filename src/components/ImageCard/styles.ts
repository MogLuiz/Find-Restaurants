import styled from "styled-components";

interface ICardStyledComponent {
    photo: string;
}

export const Card = styled.div<ICardStyledComponent>`
    height: 90px;
    height: 90px;

    border-radius: 6px;

    background-image: url(${props => props.photo});
    background-size: cover;
`