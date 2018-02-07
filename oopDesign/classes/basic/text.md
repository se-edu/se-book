<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Basic :one:

</div>

<div id="body">

**Writing an OOP program is essentially writing instructions that the computer uses to,**
 1. **create the virtual world of object network, and**
 2. **provide it the inputs to produce the outcome we want.** 

**A ==_class_== contains instructions for creating a specific kind of objects**. It turns out sometimes multiple objects have the same behavior because they are of the same kind. Instructions for creating a one kind (or ‘class’) of objects can be done in one go and use that same instructions to instantiate (i.e. create) objects of that kind. We call such instructions a _Class_.

<tip-box>

:package: Classes and objects in an example scenario

When writing an OOP program to calculate the average age of Adam, Beth, Charlie, and Daisy, instructions for creating objects `Adam`, `Beth`, `Charlie`, and `Daisy` will be very similar because they are all of the same kind : they all represent ‘persons’ with the same interface, the same kind of data (i.e. `name`, `DoB`, etc.), and the same kind of behavior (i.e. `getAge(Date)`, `getName()`, etc.). Therefore, we can have a class called `Person` containing instructions on how to create `Person` objects and use that class to instantiate objects `Adam`, `Beth`, `Charlie`, and `Daisy`. Similarly, we need classes `AgeList`, `Calculator`, and `Main` classes to instantiate one each of `AgeList`, `Calculator`, and `Main` objects.

</tip-box>

<!-- TODO: add a more elaborate UML intro here -->

Let us use the UML notation to illustrate classes and objects under discussion.

<panel src="../../../uml/classDiagrams/classes/what/full.md" header=":mortar_board: UML → Class Diagrams → Classes" expanded />
<panel src="../../../uml/objectDiagrams/objects/full.md" header=":mortar_board: UML → Object Diagrams → Objects" expanded/>

<p/>

<tip-box>

<img src="{{baseUrl}}/oopDesign/classes/basic/images/person.png" height="100" />
<p/>

`Person` class and some example instances of the `Person` class.

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
