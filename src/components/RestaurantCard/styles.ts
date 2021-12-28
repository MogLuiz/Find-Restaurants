import styled from "styled-components";

export const RestaurantContainer = styled.div`
    display: flex;
    justify-content: space-between;

    cursor: pointer;

    margin-top: 5px;
    padding: 16px;

    background-color: ${props => props.theme.colors.white};
    
    transition: 0.2s;

    &:hover {
        border-left: 5px solid ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.background};
    }
`

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const RestaurantName = styled.span`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 24px;
    font-weight: bold;

    line-height: 29px;

    margin-bottom: 10px;

    color: ${props => props.theme.colors.text};
`

export const RestaurantAdress = styled.span`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 16px;

    line-height: 19px;

    margin: 10px 0;

    color: ${props => props.theme.colors.text};
`

export const RestaurantImage = styled.img`
    width: 100px!important;
    height: 100px!important;

    border-radius: 6px;

    object-fit: cover;
`