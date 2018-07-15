<div id="title">

#### Frameworks vs Libraries

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can differentiate between frameworks and libraries</span>

<div id="body">

Although both frameworks and libraries are reuse mechanisms, there are notable differences:

* **Libraries are meant to be used ‘as is’ while frameworks are meant to be customized/extended.**
%%&nbsp;e.g., writing plugins for Eclipse so that it can be used as an IDE for different languages (C++, PHP, etc.), adding modules and themes to Drupal, and adding test cases to JUnit%%.

* **Your code calls the library code while the framework code calls your code.**
**Frameworks use a technique called _inversion of control_, aka the “Hollywood principle”** (i.e. don’t call us, we’ll call you!). That is, you write code that will be called by the framework, %%&nbsp;e.g. writing test methods that will be called by the JUnit framework.%% In the case of libraries, your code calls libraries.

</div>

<div id="extras">

<include src="exercises.md" />

</div>