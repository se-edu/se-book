<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming &rarr; Conceptualizing an OOP Solution &rarr;</div>

<div id="title">

#### Basic :two:

</div>

<div id="body">

<dynamic-panel src="../../../uml/sequenceDiagrams/introduction/embed.md" header="UML: Sequence Diagrams: Introduction" is-open></dynamic-panel>

<p/>

Let us start by modelling a sample interaction between the person playing the game and the TextUi object.

<dynamic-panel src="../../../uml/sequenceDiagrams/basic/embed.md" header="UML: Sequence Diagrams: Basic" is-open></dynamic-panel>

<p/>

<tip-box>

Example:

<img src="{{baseUrl}}/oopDesign/conceptualizingSolution/basic/images/playerText.png" height="300" />
<p/>

`newgame` and `clear x y` represent commands typed by the `Player` on the `TextUi`.

</tip-box>

How does the `TextUi` object carry out the requests it has received from player? It would need to interact with other objects of the system. Because the `Logic` class is the one that controls the game logic, the `TextUi` needs to collaborate with `Logic` to fulfill the `newgame` request. Let us extend the model to capture that interaction.

<tip-box>

<img src="{{baseUrl}}/oopDesign/conceptualizingSolution/basic/images/playerTextLogic.png" height="280" />
<p/>

W = Width of the minefield; H =  Height of the minefield

</tip-box>

The above diagram assumes that W and H are the only information `TextUi` requires to display the minefield to the `Player`. Note that there could be other ways of doing this.  
The Logic methods we conceptualized in our modelling so far are:

<tip-box>

<img src="{{baseUrl}}/oopDesign/conceptualizingSolution/basic/images/textLogicMinefieldCell.png" height="115" />
<p/>

</tip-box>

Now, let us look at what other objects and interactions are needed to support the `newGame()` operation.  It is likely that a new `Minefield` object is created when the `newGame()` method is called.

<dynamic-panel src="../../../uml/sequenceDiagrams/objectCreation/embed.md" header="UML: Sequence Diagrams: Object Creation" is-open></dynamic-panel>

<p/>

<tip-box>

<img src="{{baseUrl}}/oopDesign/conceptualizingSolution/basic/images/logicMinefield.png" height="100" />
<p/>

</tip-box>

Note that the behavior of the `Minefield` constructor has been abstracted away. It can be designed at a later stage.

Given below are the interactions between the player and the Text UI for the whole game.

<dynamic-panel src="../../../uml/sequenceDiagrams/loops/embed.md" header="UML: Sequence Diagrams: Loops" is-open></dynamic-panel>

<p/>

<tip-box>

<img src="{{baseUrl}}/oopDesign/conceptualizingSolution/basic/images/playerTextLoop.png" height="300" />
<p/>

</tip-box>

<dynamic-panel src="../../../uml/sequenceDiagrams/minimalNotation/embed.md" header="UML: Sequence Diagrams: Minimal Notation" is-open></dynamic-panel>

<p/>

</div>

<div id="extras">
<div>

</div>
