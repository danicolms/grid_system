import React, { useState, useEffect } from "react";
import { useGridSize, EGridSizes } from "../utils";
import { SGridItem } from "./styles";

interface GridItemProps {
  small?: [number, number];
  medium?: [number, number];
  large?: [number, number];
}
const GridItem: React.FunctionComponent<GridItemProps> = ({
  children,
  small,
  medium,
  large,
}) => {
  const [start, setStart] = useState<number>(large[0]);
  const [end, setEnd] = useState<number>(large[1]);
  const gridSize = useGridSize();

  useEffect(() => {
    if (gridSize === EGridSizes.SMALL) {
      setStart(small[0]);
      setEnd(small[1]);
    } else if (gridSize === EGridSizes.MEDIUM) {
      setStart(medium[0]);
      setEnd(medium[1]);
    } else {
      setStart(large[0]);
      setEnd(large[1]);
    }
  }, [gridSize]);

  return (
    <SGridItem start={start} end={end}>
      {children}
    </SGridItem>
  );
};

GridItem.defaultProps = {
  small: [0, 12],
  medium: [0, 8],
  large: [0, 4],
};

export default GridItem;
