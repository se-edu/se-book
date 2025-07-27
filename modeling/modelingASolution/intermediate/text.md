<span id="title">Intermediate</span>

<span id="prereqs"><panel src="../../../modeling/modelingBehaviors/sequenceDiagramsIntermediate/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Modeling → Modeling Behaviors → Sequence Diagrams → Intermediate%%" popup-url="{{ baseUrl }}/modeling/modelingBehaviors/sequenceDiagramsIntermediate" />
<panel src="../../../modeling/modelingStructures/classDiagramsIntermediate/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Modeling → Modeling Structures → Class Diagrams → Intermediate%%" popup-url="{{ baseUrl }}/modeling/modelingStructures/classDiagramsIntermediate" /></span>

<span id="outcomes">{{ icon_outcome }} Can use intermediate class diagram and sequence diagram concepts to model an OO design</span>

<div id="body">

Continuing with the example in [<trigger trigger="click" for="modal:conceptualingIntermediate-basic">Design → Modeling → Modeling a Solution → Basic</trigger>], next let us model how the `TextUi` interacts with the `Logic` to support the mark and clear operations until the game is won or lost.

<modal large header="" id="modal:conceptualingIntermediate-basic">
  <include src="../basic/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/playerTextLogicRef.png" height="250" />
<p/>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/textLogicSd.png" height="210" />

</box>

This interaction adds the following methods to the `Logic` class:

* `clearCellAt(int x, int y)`
* `markCellAt(int x, int y)`
* `getGameState(): GAME_STATE (GAME_STATE: READY, IN_PLAY, WON, LOST, …)`

And it adds the following operation to Logic API:

* `getAppearanceOfCellAt(int,int): CELL_APPEARANCE (CELL_APPEARANCE: HIDDEN, ZERO, ONE, TWO, THREE, …, MARKED, INCORRECTLY_MARKED, INCORRECTLY_CLEARED)`

In the above design, `TextUi` does not access `Cell` objects directly. Instead, it gets values of type `CELL_APPEARANCE` from `Logic` to be displayed as a minefield to the player. Alternatively, each cell or the entire minefield can be passed directly to `TextUi`.

Here is the updated class diagram:

<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/textLogicMinefieldCell.png" height="200" />

</box>

The above is for the case when Actor `Player` interacts with the system using a text UI. Additional operations (if any) required for the GUI can be discovered similarly.
Suppose `Logic` supports a `reset()` operation. You can model it like this:


<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/logicMinefieldReset.png" height="100" />

</box>

Our current model assumes that the `Minefield` object has enough information (i.e., H, W, and mine locations) to create itself.

<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/logicMinefieldNewGame.png" height="85" />
<p/>

</box>

An alternative is to have a `ConfigGenerator` object that generates a string containing the minefield information as shown below.

<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/logicConfigGenerator.png" height="170" />
<p/>

</box>

In addition, `getWidth()`, `getHeight()`, `markCellAt(x,y)` and `clearCellAt(x,y)` can be handled like this.

<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/logicMinefieldFunctions.png" height="180" />

</box>

The updated class diagram:

<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/textLogicMinefieldCellConfigGenerator.png" height="250" />

</box>

How is the `getGameState()` operation supported? Given below are two ways (there could be other ways):

1. The `Minefield` class knows the state of the game at any time. The `Logic` class retrieves it from the `Minefield` class as and when required.
2. The `Logic` class maintains the state of the game at all times.

Here’s the SD for option 1.

<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/logicMinefieldGetGameState.png" height="180" />

</box>

Here’s the SD for option 2. Assume that the game state is updated after every mark/clear action.

<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/logicMinefieldUpdateState.png" height="250" />

</box>

It is now time to explore what happens inside the `Minefield` constructor. One way is to design it as follows.

<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/minefieldCellAlt.png" height="200" />

</box>

Now let us assume that `Minesweeper` supports a ‘timing’ feature.


<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/logicTimerOpt.png" height="130" />

</box>

Updated class diagram:

<box>

<pic eager src="{{baseUrl}}/modeling/modelingASolution/intermediate/images/fullClassDiagram.png" height="250" />

</box>

<box>

{{ icon_tip }} When designing components, it is not necessary to draw elaborate UML diagrams capturing all details of the design. They can be done as rough sketches. For example, draw sequence diagrams only when you are not sure which operations are required by each class, or when you want to verify that your class structure can indeed support the required operations.

</box>

</div>

<div id="extras">
</div>
