<div id="title">

#### Minimise Scope of Variables

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: minimise scope of variables </span>

<div id="body">

**Minimize global variables**. Global variables may be the most convenient way to pass information around, but they do create implicit links between code segments that use the global variable. Avoid them as much as possible.

**Define variables in the least possible scope**. For example, if the variable is used only within the `if` block of the conditional statement, it should be declared inside that `if` block. 

>**The most powerful technique for minimizing the scope of a local variable is to declare it where it is first used.** <sub>-- _Effective Java_, by Joshua Bloch</sub>

{{ icon_resource }} Resources:

* [Refactoring: Reduce Scope of Variable](https://refactoring.com/catalog/reduceScopeOfVariable.html) 

</div>

<div id="extras">
</div>