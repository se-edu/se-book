<div id="title">

#### Basic

</div>

<span id="prereqs"><panel src="../../../modeling/modelingBehaviors/sequenceDiagramsBasic/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Modeling → Modeling Behaviors → Sequence Diagrams → Basic%%" />
<panel src="../../../modeling/modelingStructures/classDiagramsBasic/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Modeling → Modeling Structures → Class Diagrams → Basic%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can use simple class diagrams and sequence diagrams to model an OO solution</span>

<div id="body">

As mentioned in [<trigger trigger="click" for="modal:basicModelling-modelingIntro">Design → Modeling → Modeling a Solutions → Introduction</trigger>], this is the Minesweeper design you have come up with so far. Our objective is to analyze, evaluate, and refine that design.

<modal large title="Textbook {{ icon_embedding }}" id="modal:basicModelling-modelingIntro">
  <include src="../introduction/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<img src="{{baseUrl}}/modeling/modelingASolution/introduction/images/textLogicMinefieldCell.png" height="50" />
<p/>

Let us start by modelling a sample interaction between the person playing the game and the `TextUi` object.

<tip-box>

<img src="{{baseUrl}}/modeling/modelingASolution/basic/images/playerText.png" height="300" />
<p/>

`newgame` and `clear x y` represent commands typed by the `Player` on the `TextUi`.

</tip-box>

How does the `TextUi` object carry out the requests it has received from player? It would need to interact with other objects of the system. Because the `Logic` class is the one that controls the game logic, the `TextUi` needs to collaborate with `Logic` to fulfill the `newgame` request. Let us extend the model to capture that interaction.

<tip-box>

<img src="{{baseUrl}}/modeling/modelingASolution/basic/images/playerTextLogic.png" height="280" />
<p/>

`W` = Width of the minefield; `H` =  Height of the minefield

</tip-box>

The above diagram assumes that `W` and `H` are the only information `TextUi` requires to display the minefield to the `Player`. Note that there could be other ways of doing this.  
The `Logic` methods we conceptualized in our modelling so far are:

<tip-box>

<img src="{{baseUrl}}/modeling/modelingASolution/basic/images/textLogicMinefieldCell.png" height="115" />

</tip-box>

Now, let us look at what other objects and interactions are needed to support the `newGame()` operation.  It is likely that a new `Minefield` object is created when the `newGame()` method is called.

<tip-box>

<img src="{{baseUrl}}/modeling/modelingASolution/basic/images/logicMinefield.png" height="150" />

</tip-box>

Note that the behavior of the `Minefield` constructor has been abstracted away. It can be designed at a later stage.

Given below are the interactions between the player and the Text UI for the whole game.


<tip-box>

<img src="{{baseUrl}}/modeling/modelingASolution/basic/images/playerTextLoop.png" height="300" />
<p/>

</tip-box><p>

<tip-box> 

:bulb: Note that <tooltip content="using sequence diagramsn">a similar technique</tooltip> can be used when discovering/defining the architecture-level APIs.

<div v-closeable alt="Tic-Tac-Toe Video"> 

{{ icon_video }} Defining the architecture-level APIs for a small Tic-Tac-Toe game:

@[youtube](Un80XoRT1ME)

</div>

</tip-box>

</div>

<div id="extras">
</div>