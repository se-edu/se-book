<panel header=":lock::key: Adding features to Minesweeper AD :three:">
<question has-input="true">

Given below is the high-level game logic of the Minesweeper, drawn from the point of view of the player.

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/combined/images/minesweeperQuestion.png" height="220" />
<p/>

Incorporate the following new features to the above AD.

**(a) timing**

Description: The game keeps track of the total time spent on a game. The counting starts from the moment the first cell is cleared/marked and stops when the game is won or lost. Time elapsed is shown to the player after every mark/clear operation.

**(b) standing_ground**

Description: At the beginning of the game, the player chooses five cells to be revealed without penalty. This is done one cell at a time. If the cell so selected is mined, it will be marked automatically. The objective is to give some “standing ground” to the player from which he/she can deduce remaining cells. The player cannot mark or clear cells until the standing ground is selected.

**(c) tolerate**

Description: Marking a cell incorrectly is tolerated as long as the number of cells does not exceed the total mines. Marked cells can be unmarked. The player is not allowed to mark more cells if the total number of marked cells equals the total number of mines.

<div slot="answer">

**(a) No change to the AD**

After incorporating (b)

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/combined/images/minesweeperAnswerA.png" height="220" />
<p/>

Given above is a minimal change. It is OK to show more details of the ‘clear standing ground’ action or show it as a separate AD.

After incorporating (c)

<img src="{{baseUrl}}/uml/activityDiagrams/basicNotations/combined/images/minesweeperAnswerB.png" height="290" />
<p/>

Note that some actions/paths have been deleted. The above diagram uses a diamond as either a branch or a merge (but not both). It is ok to use a diamond as both a merge and branch, as long as it does not lead to ambiguities.

</div>
</question>
</panel>
