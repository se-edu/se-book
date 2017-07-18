<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Software Design Patterns :arrow_right: Singleton Pattern :arrow_right:</div>

<div id="title">

#### What :two:

</div>

<div id="body">

**Context**

A certain classes should have no more than just one instance (e.g. the main controller class of the system). These single instances are commonly known as _singletons_.

**Problem**

A normal class can be instantiated multiple times by invoking the constructor.  

**Solution**

The key insight of the solution is that the _constructor_ of the singleton class cannot be _public_. Because a _public constructor_ will allow others to instantiate the class at will, a _private constructor_ should be used instead. In addition, a public class-level method is provided to access the _single instance_.

<tip-box>

Example:

<img src="{{baseUrl}}/designPatterns/singleton/what/images/singleton.png" height="130" />
<p/>

</tip-box>

</div>

</div>
