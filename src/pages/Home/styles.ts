// Packages
import styled from "styled-components";

// Components
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};

    width: 360px;
    height: 100vh;

    overflow-y: auto;

    img {
        height: 90px;
    }
`

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: ${props => props.theme.colors.white};

    padding: 16px;
`

export const Logo = styled.img`
    margin-bottom: 15px;
`

export const Map = styled.div`
    background-color: ${props => props.theme.colors.text};
    flex: 1;
`

export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 30px;
    }

    
`

export const CarouselTitle = styled.h1`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 24px;
    font-weight: bold;

    line-height: 29px;

    color: ${props => props.theme.colors.text};

    margin: 16px 0;
`

export const ModalTitle = styled.p `
    margin-bottom: 10px;
    
    letter-spacing: 0.11px;
    text-transform: none;
    line-height: 29px;
    font-family: ${props => props.theme.fonts.regular};
    font-size: 24px;
    font-weight: bold;

    color: ${props => props.theme.colors.text}
`

export const ModalContent = styled.p`
    margin-bottom: 10px;

    font-family: ${props => props.theme.fonts.regular};
    font-weight: normal;
    line-height: 19px;
    font-size: 16px;

    color: ${props => props.theme.colors.text}
`