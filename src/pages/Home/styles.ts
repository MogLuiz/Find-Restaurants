import styled from "styled-components";

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