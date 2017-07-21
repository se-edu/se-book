<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Reuse :arrow_right: Frameworks :arrow_right:</div>

<div id="title">

#### Frameworks vs Libraries :three:

</div>

<div id="body">

Although both frameworks and libraries are reuse mechanisms, there are notable differences:

*	**Libraries are meant to be used ‘as is’ while frameworks are meant to be customized/extended.**
Examples: writing plugins for Eclipse so that it can be used as an IDE for different languages (C++, PHP, etc.), adding modules and themes to Drupal, and adding test cases to JUnit .

*	**Your code calls the library code while the framework code calls your code.**
Frameworks use a technique called _inversion of control_, also called the “Hollywood principle” (i.e. don’t call us, we’ll call you!). That is, you write code that will be called by the framework, e.g. writing test methods that will be called by the JUnit framework. In the case of libraries, written code calls libraries.

</div>

<div id="extras">
<div>

</div>
