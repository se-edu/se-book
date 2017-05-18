The main body of the use case is the sequence of steps that describes the interaction between the system and the actors. Each step is given as a simple statement.

<tip-box>

Use case: <popover effect="fade" placement="right" content="Each use case can be given a unique identification for easier cross reference."> UC01 </popover> conduct survey
1. Staff creates the survey.
2. Student completes the survey.
3. Staff views the survey results.
Use case ends.

</tip-box>

A use case describes only the externally visible behavior, not internal details, of a system.

{give example}

Every step should clearly show _who_ does _what_. A step gives the **intention** of the actor (not the mechanics). That means UI details are usually omitted. The idea is to leave as much flexibility to the UI designer as possible. That is, the use case specification should be as general as possible (less specific) about the UI. For example,

<tip-box>

`User right-clicks the text box and chooses ‘clear’`: This contains UI-specific details and is not a good use case step.

`User clears the input`: This is better because it omits UI-specific details.

</tip-box>

The following is an illustration of how we can include repetitive steps in a scenario.

<tip-box>

```
Software System: Square game  
Use case:  UC02 - Play a Game
Actors: Player (multiple players)
        1. A Player starts the game.
        2. SquareGame asks for player names.
        3. Each Player enters his own name.
        4. SquareGame shows the order of play.
        5. SquareGame prompts for the current Player to throw die.
        6. Current Player adjusts the throw speed.
        7. Current Player triggers the die throw.
        8. Square Game shows the face value of the die.
        9. Square Game moves the Player's piece accordingly.
        Steps 5-9 are repeated for each Player, and for as many rounds as required until a Player reaches the 100th square.
        10. Square Game shows the Winner.
        Use case ends.
```

</tip-box>
