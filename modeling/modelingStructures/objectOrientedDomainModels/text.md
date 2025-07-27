<span id="title">Conceptual Class Diagrams (aka OODMs)</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain object oriented domain models</span>

<div id="body">

> The analysis process for identifying objects and object classes is recognized as one of the most difficult areas of object-oriented development. <sub>--[Ian Sommerville, in the book _Software Engineering_](http://www.software-engin.com/)</sub>

<box type="info" seamless>

**Sidebar: Domain Modeling**{.text-info}

**_Domain modeling_ is modeling the <tooltip content="the relevant information that needs to be examined to understand a problem">problem domain</tooltip>** i.e., to model how things actually work in the real world. Domain modeling is useful in understanding the problem domain, which is essential to the success of a project.

**Domain modeling can be done using**,

* **a _domain-specific_ modeling notation** if such a notation exists (e.g., a modeling notation specific to the banking domain might have elements to represent loans, accounts, transactions etc.),
* **or a general purpose modeling notation**, such as UML (e.g., you can use an activity diagram to model the workflow of processing a loan application),
* **or even other general purpose notations** (e.g., you can use an organization chart to model the employee hierarchy of a company).
</box>

When building an OOP system, it makes sense to build OOP models of the problem domain, given OOP aspires to emulate the objects in the real world.

**The UML model that captures class structures in the problem domain are called _conceptual class diagrams_.** They are in fact a lighter version of class diagrams, and sometimes also called _OO domain models (OODMs)_. The latter name is somewhat misleading as conceptual class diagrams (CCDs) are actually only one type of domain models that can model an OOP problem domain.

<box>

{{ icon_example }} The CCD of a snakes and ladders game is given below.

Description: The snakes and ladders game is played by two or more players using a board and a die. The board has 100 squares marked 1 to 100. Each player owns one piece. Players take turns to throw the die and advance their piece by the number of squares they earned from the die throw. The board has a number of snakes. If a player’s piece lands on a square with a snake head, the piece is automatically moved to the square containing the snake’s tail. Similarly, a piece can automatically move from a ladder foot to the ladder top. The player whose piece is the first to reach the 100th square wins.

<pic eager src="{{baseUrl}}/modeling/modelingStructures/objectOrientedDomainModels/images/diagram.png" height="420" />
<p/>

</box>

**CCDs do not contain solution-specific classes** (i.e., classes that are used in the solution domain but do not exist in the problem domain). For example, a class called DatabaseConnection could appear in a class diagram but not usually in a CCD because DatabaseConnection is something related to a software solution but not an entity in the problem domain.

**CCDs represents the class _structure_ of the problem domain** and not their behavior, just like class diagrams. To show behavior, use other diagrams such as sequence diagrams.

**CCD notation is a subset of the class diagram notation (omits methods and navigability).**

</div>

<div id="extras">

<include src="exercisesPanel.md" boilerplate />

</div>
