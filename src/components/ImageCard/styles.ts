import styled from "styled-components";

interface ICardStyledComponent {
    photo: string;
}

export const Card = styled.div<ICardStyledComponent>`
    padding: 5px;

    height: 90px!important;
    width: 90px!important;
  
    border-radius: 6px;

    background-image: url(${props => props.photo});
    background-size: cover;
`

// export const CardImage = styled.img`
    

//     height: 90px;
//     height: 90px;

//     border-radius: 6px;
// `

export const Title = styled.span`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 16px;

    color: ${props => props.theme.colors.white};
`