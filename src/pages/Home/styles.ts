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
    .slick-Slide {
        margin-right: 16px;
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