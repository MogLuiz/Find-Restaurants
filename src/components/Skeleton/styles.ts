// Packages
import styled, { keyframes } from "styled-components";

// Types
import { ISkeletonComponentProps } from "./shared/types";

const KeyFrameLoading = keyframes `
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`

export const LoadingSkeleton = styled.div<ISkeletonComponentProps>`
    background-color: gray;

    border-radius: 6px;
    margin-bottom: 10px;

    min-width: ${props => props.width};
    height: ${props => props.height};

    animation: ${KeyFrameLoading} 500ms infinite alternate;
`