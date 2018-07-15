<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Singleton design pattern</span>

<div id="body">

**Context**

A certain classes should have no more than just one instance (e.g. the main controller class of the system). These single instances are commonly known as _singletons_.

**Problem**

A normal class can be instantiated multiple times by invoking the constructor.  

**Solution**

Make the constructor of the singleton class `private`, %%&nbsp;because a `public` constructor will allow others to instantiate the class at will%%. Provide a `public` class-level method to access the _single instance_.

<tip-box>

Example:

<img src="{{baseUrl}}/designPatterns/singleton/what/images/singleton.png" height="130" />
<p/>

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>