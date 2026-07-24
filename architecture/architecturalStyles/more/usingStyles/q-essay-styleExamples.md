<panel header="{{ icon_Q_A }} Comment on how to use architecture styles in Minesweeper.">

Consider a multiplayer version of Minesweeper in which players use their own computers but share one minefield. A player scores by deducing a cell correctly before any other player does. When one player correctly clears a cell, every player should see the result.

<pic eager src="{{baseUrl}}/architecture/introduction/what/images/minesweeper.png" height="220" />

Explain how each of the following styles could help design this game.

1. Layered
1. Event-driven
1. Client-server

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

1. **Layered** – Separate each client's user interface from the code that talks to the server, and separate the server's game rules from its data storage; dependencies point one way in both.
1. **Event-driven** – Inside each client, mouse clicks are local GUI events. Across the system, "cell X was cleared by player Y" is an event the server publishes to every connected client, so clients need not repeatedly ask for updates.
1. **Client-server** – Essential here: the clients are the game UI on each player's computer, and the server holds the one authoritative minefield and scoring rules. The players must share one minefield, and no player's computer can be trusted to hold it.

**The hard part is what distribution introduces, not what the style names.** When two players click the same cell at nearly the same moment, the server must define what counts as "first" and ensure each cell is awarded only once — and it cannot rely on arrival order alone, because network delay means requests need not arrive in the order they were clicked.

<pic eager src="{{baseUrl}}/architecture/architecturalStyles/more/usingStyles/images/minesweeperExample.png" height="300" />
<p/>

</panel>
</panel>
