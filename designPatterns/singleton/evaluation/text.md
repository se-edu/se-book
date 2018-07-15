<div id="title">

#### Evaluation

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can decide when to apply Singleton design pattern</span>

<div id="body">

**Pros:**
* easy to apply 
* effective in achieving its goal with minimal extra work
* provides an easy way to access the singleton object from anywhere in the code base

**Cons:**
* The singleton object acts like a global variable that increases coupling across the code base.
* In testing, it is difficult to replace Singleton objects with stubs (static methods cannot be overridden)
* In testing, singleton objects carry data from one test to another even when we want each test to be independent of the others.

Given there are some significant cons, it is recommended that you apply the Singleton pattern when, in addition to requiring only one instance of a class, there is a risk of creating multiple objects by mistake, and creating such multiple objects has real negative consequences.

</div>

<div id="extras">
</div>