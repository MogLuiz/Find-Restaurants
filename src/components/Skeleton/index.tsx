import React from "react";

import { LoadingSkeleton } from "./styles";

interface ISkeletonComponentProps {
  width: string;
  height: string;
}

const Skeleton: React.FC<ISkeletonComponentProps> = ({ height, width }) => (
  <LoadingSkeleton height={width} width={width} />
);

export default Skeleton;
