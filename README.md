# Responsive column grid for React:

## Instalation:

Install the package from yarn:

      yarn add @danicolms/grid_system
    
Then import the components to your project like this:

       import { Grid, GridItem, GridItemSize } from "@danicolms/grid_system";

## Usage:
The package contains two components and one typescript type:

### Grid:
The `Grid` component is basically the wrapper of the `GridItems`, it contains the columns, margin and gutter size information. Its function is to create the grid of 12, 8 or 4 auto-responsive columns in which the items will be positioned.

    <Grid> {...GridItems will be placed as children} </Grid>

The `Grid` component can recieve two optional props:
| property | type | default |
|--|--|--|
| margins | [number, number, number]  |[20, 30, 80]|
| gutterSizes | [number, number, number]  |[20, 20, 20]|

The margins propery will define the horizontal margin of the grid and gutterSize will define the spacing between each column. They both take a three number array, corresponding to the value for all three screen size constants (gutterSize[0] => small screen gutter size value, gutterSize[1] => medium size screen gutter size value, and so).

### GridItem:
The `GridItem`  will be the container for the actual UI components in the layout, it defines the size and the placement of those components as the viewport width changes. It is meant to position elements on the layout, the actual styling of the elements inside the `GridItem` are meant to go inside those elements.

    <Grid>
	    <GridItem
		   l={{ start: 1, end: 5, row: 1 } as  GridItemSize}
		   m={{ start: 1, end: 8, row: 2 } as  GridItemSize}
		   s={{ start: 2, end: 4, row: 2 } as  GridItemSize}
	    >
	       {...The UI components will be placed as children}
	    </GridItem>
	</Grid>

The `GridItem` component can optional three props:
| property | type | default |
|--|--|--|
| s | GridItemSize  |{ start: 1, end: 4, row: "auto" }|
| m | GridItemSize  |{ start: 1, end: 8, row: "auto" }|
| l | GridItemSize  |{ start: 1, end: 12, row: "auto" }|

As you can see, all these three props define the placement of the UI element in the `Grid` component. They are all of the type `GridItemSize`:

    type GridItemSize  = {
	    start: number;
	    end: number;
	    row: number | string;
    };

The way it works is we define the position for all three grid sizes. `start` dictates the grid column in which the UI column will start, `end` defines the end of the component (*including that column*), `row` defines the vertical placement of the item. In the default value for the props, the component will ocupy the whole grid width and the items will be vertically placed automatically.

## Example:
We defined a grid structure with default values and two items: a **blue** and a **red** rectangle with `height: 500px`.

    <Grid>
	    <GridItem
		    l={{ start: 1, end: 5, row: 1 } as  GridItemSize}
		    m={{ start: 1, end: 8, row: 2 } as  GridItemSize}
	    	s={{ start: 2, end: 4, row: 2 } as  GridItemSize}
	    >
		    //red rectangle
		    <div style={{ background: "red", height: 500 }}></div>
	    </GridItem>
    
	    <GridItem
		    l={{ start: 6, end: 12, row: 1 } as  GridItemSize}
		    m={{ start: 1, end: 8, row: 1 } as  GridItemSize}
		    s={{ start: 1, end: 4, row: 1 } as  GridItemSize}
	    >
		    //blue rectangle
		    <div  style={{ background: "blue", height: 500 }}></div>
	    </GridItem>
    </Grid>

The result of this placement will be something like this:
On a desktop screen: \s\s
![Large screen](https://i.ibb.co/qC97ZRX/L.png)

-----------
On a tablet screen: \s\s
![Medium screen](https://i.ibb.co/2yNk2Sh/M.png)

------------
On a phone screen: \s\s
![Small screen](https://i.ibb.co/DGtQZBY/S.png)


----
@danicolms