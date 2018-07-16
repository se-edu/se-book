<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain Software Architecture</span>

<div id="body">

> The software architecture of a program or computing system is the structure or structures of the system, which comprise software elements, the externally visible properties of those elements, and the relationships among them. Architecture is concerned with the public side of interfaces; private details of elements—details having to do solely with internal implementation—are not architectural.
> <sub>-- _Software Architecture in Practice (2nd edition)_, Bass, Clements, and Kazman</sub>

**The software architecture shows the overall organization of the system and can be viewed as a very high-level design.** It usually consists of a set of interacting components that fit together to achieve the required functionality. It should be a simple and technically viable structure that is well-understood and agreed-upon by everyone in the development team, and it forms the basis for the implementation.

<tip-box>

{{ icon_example }} A possible architecture for a _Minesweeper_ game

<table>
<tr>
<td><img src="{{baseUrl}}/architecture/introduction/what/images/minesweeper.png" height="220" /></td>
<td width="10px"></td>
<td><img src="{{baseUrl}}/architecture/introduction/what/images/minesweeperArchitecture.png" height="160" /></td>
</tr>
</table>
<p/>

Main components:
* `GUI`: Graphical user interface
* `TextUi`: Textual user interface
* `ATD`: An automated test driver used for testing the game logic
* `Logic`: computation and logic of the game
* `Store`: storage and retrieval of game data (high scores etc.)

</tip-box>

**The architecture is typically designed by the _software architect_**, who provides the technical vision of the system and makes high-level (i.e. architecture-level) technical decisions about the project.


<!-- TODO: 
The logical view (satisfying the functional requirements) vs. the process view (concurrency issues) vs. the physical view (distribution issues) vs. the development view (how the design is broken down into implementation units with explicit representation of the dependencies among the units). -->

</div>

<div id="extras">

<include src="exercises.md" />

</div>