import React, { useState, useEffect } from "react";
import { SGrid } from "./styles";
import { useGridSize, EGridSizes } from "../utils";

interface GridProps {
  margins?: [number, number, number];
  gutterSizes?: [number, number, number];
}

const Grid: React.FunctionComponent<GridProps> = ({
  children,
  gutterSizes,
  margins,
}) => {
  const [margin, setMargin] = useState<number>(margins[2]);
  const [gutterSize, setGutterSize] = useState<number>(gutterSizes[2]);
  const gridSize = useGridSize();

  useEffect(() => {
    if (gridSize === EGridSizes.SMALL) {
      setMargin(margins[0]);
      setGutterSize(gutterSizes[0]);
    } else if (gridSize === EGridSizes.MEDIUM) {
      setMargin(margins[1]);
      setGutterSize(gutterSizes[1]);
    } else {
      setMargin(margins[2]);
      setGutterSize(gutterSizes[2]);
    }
  }, [gridSize]);

  return (
    <SGrid size={gridSize} gutterSize={gutterSize} margin={margin}>
      {" "}
      {children}{" "}
    </SGrid>
  );
};

Grid.defaultProps = {
  gutterSizes: [20, 20, 20],
  margins: [20, 30, 80],
};

export default Grid;
