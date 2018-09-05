<div id="title">

#### Basic

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the relationship between classes and objects </span>

<div id="body">

**Writing an OOP program is essentially writing instructions that the computer uses to,**
 1. **create the virtual world of object network, and**
 2. **provide it the inputs to produce the outcome we want.** 

**A ==_class_== contains instructions for creating a specific kind of objects**. It turns out sometimes multiple objects have the same behavior because they are of the _same kind_. Instructions for creating a one kind (or ‘class’) of objects can be done once and that same instructions can be used to <tooltip content="i.e. create">_instantiate_</tooltip> objects of that kind. We call such instructions a _Class_.

<tip-box>

{{ icon_example }} Classes and objects in an example scenario

Consider the example of writing an OOP program to calculate the average age of Adam, Beth, Charlie, and Daisy.

Instructions for creating objects `Adam`, `Beth`, `Charlie`, and `Daisy` will be very similar because they are all of the same kind : they all represent ‘persons’ with the same interface, the same kind of data (i.e. `name`, `DoB`, etc.), and the same kind of behavior (i.e. `getAge(Date)`, `getName()`, etc.). Therefore, we can have a class called `Person` containing instructions on how to create `Person` objects and use that class to instantiate objects `Adam`, `Beth`, `Charlie`, and `Daisy`.

Similarly, we need classes `AgeList`, `Calculator`, and `Main` classes to instantiate one each of `AgeList`, `Calculator`, and `Main` objects.

Class | Objects
------|--------
`Person`| objects representing Adam, Beth, Charlie, Daisy
`AgeList` | an object to represent the age list
`Calculator` | an object to do the calculations
`Main` | an object to represent you who manages the whole operation

</tip-box>


</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>

