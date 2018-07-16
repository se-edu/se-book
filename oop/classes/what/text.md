<div id="title">

#### Basic

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the relationship between classes and objects </span>

<div id="body">

**Writing an OOP program is essentially writing instructions that the computer uses to,**
 1. **create the virtual world of object network, and**
 2. **provide it the inputs to produce the outcome we want.** 

**A ==_class_== contains instructions for creating a specific kind of objects**. It turns out sometimes multiple objects have the same behavior because they are of the same kind. Instructions for creating a one kind (or ‘class’) of objects can be done in one go and use that same instructions to instantiate (i.e. create) objects of that kind. We call such instructions a _Class_.

<tip-box>

{{ icon_example }} Classes and objects in an example scenario

When writing an OOP program to calculate the average age of Adam, Beth, Charlie, and Daisy, instructions for creating objects `Adam`, `Beth`, `Charlie`, and `Daisy` will be very similar because they are all of the same kind : they all represent ‘persons’ with the same interface, the same kind of data (i.e. `name`, `DoB`, etc.), and the same kind of behavior (i.e. `getAge(Date)`, `getName()`, etc.). Therefore, we can have a class called `Person` containing instructions on how to create `Person` objects and use that class to instantiate objects `Adam`, `Beth`, `Charlie`, and `Daisy`. Similarly, we need classes `AgeList`, `Calculator`, and `Main` classes to instantiate one each of `AgeList`, `Calculator`, and `Main` objects.

</tip-box>

##### <big>Implementing Classes</big>

Given below are some resources on how to implement classes:

<tabs> 
  <tab header="Java">

* [Classes, methods, variables](https://docs.oracle.com/javase/tutorial/java/javaOO/classdecl.html) – Start from the linked page and follow the next few steps in the tutorial

  </tab>
  <tab header="Python">

* [Python Programming Basics: OOP: Classes](https://nus-te3201.github.io/website/programming/toc/oop.html#classes) - Basics of writing classes using Python

  </tab>
</tabs>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>