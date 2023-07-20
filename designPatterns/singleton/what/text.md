<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Singleton design pattern</span>

<div id="body">

**Context**

Certain classes should have no more than just one instance (e.g. the main controller class of the system). These single instances are commonly known as _singletons_.

**Problem**

A normal class can be instantiated multiple times by invoking the constructor.

**Solution**

Make the constructor of the singleton class `private`, %%because a `public` constructor will allow others to instantiate the class at will%%. Provide a `public` class-level method to access the _single instance_.

<box>

{{ icon_example }} Example:

<puml src="images/singleton.puml" />
<p/>

{{ icon_info }} The `<<Singleton>>` in the class above uses the UML _stereotype_ notation, which is used to (optionally) indicate the purpose or the role played by a UML element. In this example, the class `Logic` is playing the role of a Singleton class. The general format is `<<role/purpose>>`.

</box>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
