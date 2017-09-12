<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Basic :one:

</div>

<div id="body">

Notation:

<img src="{{baseUrl}}/uml/sequenceDiagrams/basic/images/notation.png" height="300" />
<p/>

<tip-box>

:package: This sequence diagram shows some interactions between a human user and the Text UI of a <tooltip content="Command Line Interface">CLI</tooltip> Minesweeper game.

<img src="{{baseUrl}}/uml/sequenceDiagrams/basic/images/playerText.png" height="300" />
<p/>

The player runs the `newgame` action on the `TextUi` object which results in the `TextUi` showing the minefield to the player. Then, the player runs the `clear x y` command; in response, the `TextUi` object shows the updated minefield.

</tip-box>

The `:TextUi` in the above example denotes _an unnamed instance of the class TextUi_. If there were two instances of `TextUi` in the diagram, they can be distinguished by naming them e.g. `TextUi1:TextUi` and `TextUi2:TextUi`.

**Arrows representing method calls should be solid arrows while those representing method returns should be dashed arrows**.

Note that unlike in Object Diagrams, the **class/object name is not underlined in sequence diagrams**.

</div>

<div id="extras">
<div>

</div>
