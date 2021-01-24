import styled from "styled-components";

export interface SGridProps {
  start: number;
  end: number;
  row: number;
}

export const SGridItem = styled.div`
  grid-column-start: ${({ start }: SGridProps) => `${start}`};
  grid-column-end: ${({ end }: SGridProps) => `${end + 1}`};
  grid-row: ${({ row }: SGridProps) => `${row} / span 1`};
`;
