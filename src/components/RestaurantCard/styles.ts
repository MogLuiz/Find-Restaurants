import styled from "styled-components";

export const Restaurant = styled.div`
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