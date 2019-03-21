<panel header="Q: Comment on how to use architecture styles in Minesweeper.">
<question has-input="true">

Assume you are designing a multiplayer version of the Minesweeper game where any number of players can play the same Minefield. Players use their own PCs to play the game. A player scores by deducing a cell correctly before any of the other players do. Once a cell is correctly deduced, it appears as either marked or cleared for all players. 

Comment on how each of the following architectural styles could be potentially useful when designing the architecture for this game.

1. Client-server
2. Transaction-processing
3. SOA (Service Oriented Architecture)
4. multi-layer (n-tier)

<div slot="answer">

1. Client-server – Clients can be the game UI running on player PCs. The server can be the game logic running on one machine.
2. Transaction-processing – Each player action can be packaged as transactions (by the client component running on the player PC) and sent to the server. Server processes them in the order they are received.
3. SOA – The game can access a remote web services for things such as getting new puzzles, validating puzzles, charging players subscription fees, etc.
4. Multi-layer – The server component can have two layers: logic layer and the storage layer.

<img src="{{baseUrl}}/architecture/architecturalStyles/more/usingStyles/images/minesweeperExample.png" height="300" />
<p/>

</div>
</question>
</panel>
