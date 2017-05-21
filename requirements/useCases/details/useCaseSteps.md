<link rel="stylesheet" href="{{baseUrl}}/css/useCases.css">

The main body of the use case is the sequence of steps that describes the interaction between the system and the actors. Each step is given as a simple statement.

<tip-box>
  <div>
    <ul>
      <li>Use case: <popover effect="fade" placement="right" content="Each use case can be given a unique identification for easier cross reference."> UC01 </popover> conduct survey
        <ol>
          <li>Staff creates the survey.</li>
          <li>Student completes the survey.</li>
          <li>Staff views the survey results.</li>
          <li class="custom-bullet-point">Use case ends.</li>
        </ol>
      </li>
    </ul>
  </div>
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
  <div>
    <ul>
      <li>Software System: Square game</li>
      <li>Use case:  UC02 - Play a Game</li>
      <li>Actors: Player (multiple players)
        <ol>
          <li>A Player starts the game.</li>
          <li>SquareGame asks for player names.</li>
          <li>Each Player enters his own name.</li>
          <li>SquareGame shows the order of play.</li>
          <li>SquareGame prompts for the current Player to throw die.</li>
          <li>Current Player adjusts the throw speed.</li>
          <li>Current Player triggers the die throw.</li>
          <li>Square Game shows the face value of the die.</li>
          <li>Square Game moves the Player's piece accordingly.</li>
          <li class="custom-bullet-point"><b>Steps 5-9 are repeated for each Player, and for as many rounds as required until a Player reaches the 100th square.</b></li>
          <li class="custom-bullet-point">10. Square Game shows the Winner.</li>
          <li class="custom-bullet-point">Use case ends.</li>
        </ol>
      </li>
    </ul>
  </div>
</tip-box>
