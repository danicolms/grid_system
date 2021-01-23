import styled from "styled-components";
import { EGridSizes } from "../utils";

export interface SGridProps {
  size: EGridSizes;
  gutterSize: number;
  margin: number;
}

const getColumnNumberBySize = (size: EGridSizes) => {
  switch (size) {
    case EGridSizes.LARGE:
      return 12;
    case EGridSizes.MEDIUM:
      return 8;
    case EGridSizes.SMALL:
      return 4;
    default:
      throw new Error("That size is not currently supported");
  }
};

export const SGrid = styled.div`
  display: grid;
  height: 100%;
  grid-auto-rows: max-content;
  column-gap: ${(props: SGridProps) => `${props.gutterSize}px`};
  grid-template-columns: ${(props: SGridProps) =>
    `repeat(${getColumnNumberBySize(props.size)}, 1fr)`};
  margin: ${(props: SGridProps) => `0px ${props.margin}px`};
`;
