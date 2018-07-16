<div id="title">

#### Intermediate

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can apply EP for OOP methods</span>

<div id="body">

When deciding EPs of OOP methods, we need to identify EPs of all data participants  that can potentially influence the behaviour of the method, such as,

* the target object of the method call
* input parameters of the method call
* other data/objects accessed by the method such as global variables. This category may not be applicable if using the black box approach (because the test case designer using the black box approach will not know how the method is implemented)

<tip-box>

{{ icon_example }} Consider this method in the `DataStack` class:
`push(Object o): boolean`
* Adds o to the top of the stack if the stack is not full.
* returns `true` if the push operation was a success.
* throws 
  * `MutabilityException` if the global flag `FREEZE==true`.
  * `InvalidValueException` if  o is null.

EPs:
  * `DataStack` object: [full] [not full]
  * `o`: [null] [not null]
  * `FREEZE`: [true][false]

</tip-box>

<tip-box>

{{ icon_example }} Consider a simple Minesweeper app. What are the EPs for the `newGame()` method of the `Logic` component?

As `newGame()` does not have any parameters, the only obvious participant is the `Logic` object itself.

Note that if the glass-box or the grey-box approach is used, other associated objects that are involved in the method might also be included as participants. For example, `Minefield` object can be considered as another participant of the `newGame()` method. Here, the black-box approach is assumed.

Next, let us identify equivalence partitions for each participant. Will the `newGame()` method behave differently for different `Logic` objects? If yes, how will it differ? In this case, yes, it might behave differently based on the game state. Therefore, the equivalence partitions are:

* `PRE_GAME` : before the game starts, minefield does not exist yet
* `READY` : a new minefield has been created and waiting for player’s first move
* `IN_PLAY` : the current minefield is already in use
* `WON`, `LOST` : let us assume the `newGame` behaves the same way for these two values

</tip-box>

<tip-box>

{{ icon_example }} Consider the `Logic` component of the Minesweeper application. What are the EPs for the `markCellAt(int x, int y)` method?. The partitions in **bold** represent valid inputs.

* `Logic`: PRE_GAME, **READY**, **IN_PLAY**, WON, LOST
* `x`: [MIN_INT..-1] **[0..(W-1)]** [W..MAX_INT] %%(we assume a minefield size of WxH)%%
* `y`: [MIN_INT..-1] **[0..(H-1)]** [H..MAX_INT]
* `Cell` at `(x,y)`: **HIDDEN**, MARKED, CLEARED

</tip-box>

</div>

<div id="extras">
</div>