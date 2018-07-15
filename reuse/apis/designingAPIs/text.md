<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can design reasonable quality APIs</span>

<div id="title">

#### Designing APIs

</div>

<div id="body">

An API should be well-designed (i.e. should cater for the needs of its users) and well-documented.

When we write software consisting of multiple components, we need to define the API of each component.

One approach is to let the API emerge and evolve over time as we write code.

Another approach is to define the API up-front. Doing so allows us to develop the components in parallel.

We can use UML _sequence diagrams_ to analyze the required interactions between components in order to discover the required API. Given below is an example.

<tip-box>

Example:

<img src="{{baseUrl}}/reuse/apis/designingAPIs/images/textLogic.png" height="500" />
<p/>

As we analyze the interactions between components using sequence diagrams, we discover the API of those components. For example, the diagram above tells us that the MSLogic component API should have the methods:

* `new()`
* `getWidth:int`
* `getHeight():int`
* `getRemainingMineCount():int`

More details can be included to increase the precision of the method definitions before coding. Such precision is important to avoid misunderstandings between the developer of the class and developers of other classes that interact with this class.

* **Operation**: _newGame(): void_
* **Description**: Generates a new _WxH_ minefield with _M_ mines. Any existing minefield will be overwritten.
* **Preconditions**: None
* **Postconditions**:	A new minefield is created. Game state is READY.

Preconditions are the conditions that must be true before calling this operation. Postconditions describe the system after the operation is complete. Note that post conditions do not say what happens during the operation.  Here is another example:

* **Operation**: _clearCellAt(int x, int y): void_
* **Description**: Records the cell at x,y as cleared.
* **Parameters**: x, y coordinates of the cell
* **Preconditions**: game state is READY or IN_PLAY.  x and y are in 0..(H-1) and 0..(W-1), respectively.
* **Postconditions**: Cell at x,y changes state to ZERO, ONE, TWO, THREE, …, EIGHT, or INCORRECTLY_CLEARED. Game state changes to IN_PLAY, WON or LOST as appropriate.

</tip-box>

</div>

<div id="extras">
</div>