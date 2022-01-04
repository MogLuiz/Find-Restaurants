// Packages
import React from "react";

// Types
import { ISkeletonComponentProps } from "./shared/types";

// Styles
import { LoadingSkeleton } from "./styles";

const Skeleton: React.FC<ISkeletonComponentProps> = ({ height, width }) => (
  <LoadingSkeleton height={width} width={width} />
);

export default Skeleton;
