import React, { useState, useEffect } from "react";

export enum EGridSizes {
  SMALL = "s",
  MEDIUM = "m",
  LARGE = "l",
}

export const useGridSize: React.FunctionComponent = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width <= 414) {
    return EGridSizes.SMALL;
  } else if (width <= 834) {
    return EGridSizes.MEDIUM;
  } else {
    return EGridSizes.LARGE;
  }
};
