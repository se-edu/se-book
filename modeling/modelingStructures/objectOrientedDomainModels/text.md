<div id="title">

#### Object Oriented Domain Models

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain object oriented domain models</span>

<div id="body">

> The analysis process for identifying objects and object classes is recognized as one of the most difficult areas of object-oriented development. <sub>--[Ian Sommerville, in the book _Software Engineering_](http://www.software-engin.com/)</sub>

Class diagrams can also be used to model objects in the <tooltip content="the relevant information that needs to be examined to understand a problem">problem domain</tooltip> (i.e. to model how objects actually interact in the real world, before emulating them in the solution). **Class diagrams are used to model the problem domain are called _conceptual class diagrams_ or _OO domain models (OODMs)_.**

<tip-box>

{{ icon_example }} OO domain model of a snakes and ladders game is given below.

Description: Snakes and ladders game is played by two or more players using a board and a die. The board has 100 squares marked 1 to 100. Each player owns one piece. Players take turns to throw the die and advance their piece by the number of squares they earned from the die throw. The board has a number of snakes. If a player’s piece lands on a square with a snake head, the piece is automatically moved to the square containing the snake’s tail. Similarly, a piece can automatically move from a ladder foot to the ladder top. The player whose piece is the first to reach the 100th square wins.

<img src="{{baseUrl}}/modeling/modelingStructures/objectOrientedDomainModels/images/diagram.png" height="420" />
<p/>

The above OO domain model omits the ladder class for simplicity. It can be included in a similar fashion to the Snake class.

</tip-box>

**OODMs do not contain solution-specific classes** (i.e. classes that are used in the solution domain but do not exist in the problem domain). For example, a class called DatabaseConnection could appear in a class diagram but not usually in an OO domain model because DatabaseConnection is something related to a software solution but not an entity in the problem domain.

**OODMs represents the class _structure_ of the problem domain** and not their behavior, just like class diagrams. To show behavior, use other diagrams such as sequence diagrams.

**OODM notation is similar to class diagram notation but typically omit methods and navigability.**

</div>

<div id="extras">

<include src="exercisesPanel.md" boilerplate />

</div>