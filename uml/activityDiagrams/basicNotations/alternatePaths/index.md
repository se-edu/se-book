<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

%%**UML :arrow_right: Activity Diagrams :arrow_right: Basic Notations :arrow_right:**%%

#### Alternate Paths :two:

<div id="main">

_Branch nodes_ and _merge nodes_ have the same notation: a **diamond** shape. They are used to show alternative (not parallel) paths through the AD. Each control flow exiting a _Branch node_ has a guard condition which allows control to flow only if the guard condition is satisfied. Therefore, a _guard_ is a boolean condition that should be true for execution to take a specific path.

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/alternatePaths/images/diagram.png" height="230" />
<p/>

<tip-box>

Example: AD for the Minesweeper (MS) that shows actions done by the player and the game (MS).

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/alternatePaths/images/minesweeper.png" height="240" />
<p/>

</tip-box>

</div>
</div>
