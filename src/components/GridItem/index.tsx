import React, { useState, useEffect } from "react";
import { useGridSize, EGridSizes } from "../utils";
import { SGridItem } from "./styles";

export type GridItemSize = {
  start: number;
  end: number;
  row: number;
};

interface GridItemProps {
  s?: GridItermSize;
  m?: GridItermSize;
  l?: GridItermSize;
}

const GridItem: React.FunctionComponent<GridItemProps> = ({
  children,
  s,
  m,
  l,
}) => {
  const [start, setStart] = useState<number>(l.start);
  const [end, setEnd] = useState<number>(l.end);
  const [row, setRow] = useState<number>(l.row);
  const gridSize = useGridSize();

  useEffect(() => {
    if (gridSize === EGridSizes.SMALL) {
      setStart(s.start);
      setEnd(s.end);
      setRow(s.row);
    } else if (gridSize === EGridSizes.MEDIUM) {
      setStart(m.start);
      setEnd(m.end);
      setRow(m.row);
    } else {
      setStart(l.start);
      setEnd(l.end);
      setRow(l.row);
    }
  }, [gridSize]);

  return (
    <SGridItem start={start} end={end} row={row}>
      {children}
    </SGridItem>
  );
};

GridItem.defaultProps = {
  s: { start: 1, end: 4, row: "auto" },
  m: { start: 1, end: 8, row: "auto" },
  l: { start: 1, end: 12, row: "auto" },
};

export default GridItem;
