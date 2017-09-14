<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

**The main body of the use case is the sequence of steps that describes the interaction between the system and the actors.** Each step is given as a simple statement describing who does what.

<tip-box>
  
:package: An example of the main body of a use case.

  1. Student requests to upload file
  2. LMS requests for the file location
  3. Student specifies the file location
  4. LMS uploads the file
    
</tip-box>

**A use case describes only the externally visible behavior, not internal details, of a system** i.e. should not mention give details that are not part of the interaction between the user and the system.

<tip-box>
  
:package: This example use case step refers to behaviors not externally visible .

1. LMS ==saves the file into the cache== and indicates success.

</tip-box>

**A step gives the intention of the actor (not the mechanics).** That means UI details are usually omitted. The idea is to leave as much flexibility to the UI designer as possible. That is, the use case specification should be as general as possible (less specific) about the UI. 

<tip-box>

:x: User right-clicks the text box and chooses ‘clear’ %%&nbsp;: this contains UI-specific details and is not a good use case step)%%

:white_check_mark: User clears the input %%&nbsp;: this is better because it omits UI-specific details%%

</tip-box>

This is how you can include repetitive steps in a scenario.

<tip-box>

Software System: Square game
Use case:  <popover effect="fade" placement="right" content="Each use case can be given a unique identification for easier cross reference."> UC02 </popover>  - Play a Game
Actors: Player (multiple players)

1. A Player starts the game.
2. SquareGame asks for player names.
3. Each Player enters his own name.
4. SquareGame shows the order of play.
5. SquareGame prompts for the current Player to throw die.
6. Current Player adjusts the throw speed.
7. Current Player triggers the die throw.
8. Square Game shows the face value of the die.
9. Square Game moves the Player's piece accordingly.<br>
   ==Steps 5-9 are repeated for each Player, and for as many rounds as required until a Player reaches the 100th square.==
10. Square Game shows the Winner.

&nbsp;&nbsp;Use case ends.

</tip-box>

