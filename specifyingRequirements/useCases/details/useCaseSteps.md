<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**The main body of the use case is a sequence of steps that describes the interaction between the system and the actors.** Each step is given as a simple statement describing _who does what_.

<box>
  
{{ icon_example }} An example of the main body of a use case.
<div class="text-monospace">

1. Student requests to upload file
2. LMS requests for the file location
3. Student specifies the file location
4. LMS uploads the file
</div>
</box>

**A use case describes only the externally visible behavior, not internal details, of a system** i.e. should minimize details that are not part of the interaction between the user and the system.

<box>
  
{{ icon_example }} This example use case step refers to behaviors not externally visible.
<div class="text-monospace">

1. LMS ==saves the file into the cache== and indicates success.
</div>
</box>

**A step gives the intention of the actor (not the mechanics).** That means UI details are usually omitted. The idea is to leave as much flexibility to the UI designer as possible. That is, the use case specification should be as general as possible (less specific) about the UI. 

<box>

{{ icon_example }} The first example below is not a good use case step because it contains UI-specific details. The second one is better because it omits UI-specific details.

<div class="indented">

{{ bad }} : User right-clicks the text box and chooses ‘clear’

{{ good }} : User clears the input

</div>
</box>

A use case description can show loops too.

<box>

{{ icon_example }} An example of how you can show a loop:
<div class="text-monospace">

Software System: SquareGame<br>
Use case:  <popover content="Each use case can be given a unique identification for easier cross reference."> UC02 </popover>  - Play a Game<br>
Actors: Player (multiple players)<br>
MSS:

1. A Player starts the game.
2. SquareGame asks for player names.
3. Each Player enters his own name.
4. SquareGame shows the order of play.
5. SquareGame prompts for the current Player to throw a die.
6. Current Player adjusts the throw speed.
7. Current Player triggers the die throw.
8. SquareGame shows the face value of the die.
9. SquareGame moves the Player's piece accordingly.<br>
   ==Steps 5-9 are repeated for each Player, and for as many rounds as required until a Player reaches the 100th square.==
10. SquareGame shows the Winner.

Use case ends.
</div>
</box>

