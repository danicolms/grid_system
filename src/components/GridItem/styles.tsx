import styled from "styled-components";

export interface SGridProps {
  start: number;
  end: number;
}

export const SGridItem = styled.div`
  grid-column-start: ${(props: SGridProps) => `${props.start}`};
  grid-column-end: ${(props: SGridProps) => `${props.end + 1}`};
`;
