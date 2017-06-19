<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

#### Conceptualising an OOP Solution: Basics

<div id="main">

<panel header="UML: Sequence Diagrams: Introduction">
  <include src="../../../uml/sequenceDiagrams/introduction/topicPanel.md" />
</panel>

<p/>

Let us start by modelling a sample interaction between the person playing the game and the TextUi object.

<panel header="UML: Sequence Diagrams: Basics">
  <include src="../../../uml/sequenceDiagrams/basics/topicPanel.md" />
</panel>

<p/>

<tip-box>

Example:

<img src="{{baseUrl}}/oop/conceptualisingSolution/basics/images/playerText.png" height="300" />
<p/>

`newgame` and `clear x y` represent commands typed by the `Player` on the `TextUi`.

</tip-box>

How does the `TextUi` object carry out the requests it has received from player? It would need to interact with other objects of the system. Because the `Logic` class is the one that controls the game logic, the `TextUi` needs to collaborate with `Logic` to fulfill the `newgame` request. Let us extend the model to capture that interaction.

<tip-box>

<img src="{{baseUrl}}/oop/conceptualisingSolution/basics/images/playerTextLogic.png" height="280" />
<p/>

W = Width of the minefield; H =  Height of the minefield

</tip-box>

The above diagram assumes that W and H are the only information `TextUi` requires to display the minefield to the `Player`. Note that there could be other ways of doing this.  
The Logic methods we conceptualized in our modelling so far are:

<tip-box>

<img src="{{baseUrl}}/oop/conceptualisingSolution/basics/images/textLogicMinefieldCell.png" height="115" />
<p/>

</tip-box>

Now, let us look at what other objects and interactions are needed to support the `newGame()` operation.  It is likely that a new `Minefield` object is created when the `newGame()` method is called.

<panel header="UML: Sequence Diagrams: Object Creation">
  <include src="../../../uml/sequenceDiagrams/objectCreation/topicPanel.md" />
</panel>

<p/>

<tip-box>

<img src="{{baseUrl}}/oop/conceptualisingSolution/basics/images/logicMinefield.png" height="100" />
<p/>

</tip-box>

Note that the behavior of the `Minefield` constructor has been abstracted away. It can be designed at a later stage.

Given below are the interactions between the player and the Text UI for the whole game.

<panel header="UML: Sequence Diagrams: Loops">
  <include src="../../../uml/sequenceDiagrams/loops/topicPanel.md" />
</panel>

<p/>

<tip-box>

<img src="{{baseUrl}}/oop/conceptualisingSolution/basics/images/playerTextLoop.png" height="300" />
<p/>

</tip-box>

<panel header="UML: Sequence Diagrams: Minimal Notation">
  <include src="../../../uml/sequenceDiagrams/minimalNotation/topicPanel.md" />
</panel>

<p/>

<!-- extras ------------------------------------------------------------------------------------ -->

<panel header=":paperclip: Extras" expandable type="seamless" expanded>

  <panel header=":mortar_board: Learning Outcomes" expandable type="seamless">
    <include src="exercises.md" />
  </panel>

  <panel header=":package: Resources" expandable type="seamless">
    <include src="resources.md" />
  </panel>

</panel>

</div>
</div>
