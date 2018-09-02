<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain OOP polymorphism</span>

<div id="body">

<tip-box type="definition">

<include src="../../../common/definitions.md#def-polymorphism" />

</tip-box>

**_Polymorphism_ allows you to write code targeting superclass objects, use that code on subclass objects, and achieve possibly different results based on the actual class of the object.**

<box>

{{ icon_example }} Assume classes `Cat` and `Dog` are both subclasses of the `Animal` class. You can write code targeting `Animal` objects and use that code on `Cat` and `Dog` objects, achieving possibly different results based on whether it is a `Cat` object or a `Dog` object. Some examples:
* Declare an array of type `Animal` and still be able to store `Dog` and `Cat` objects in it.
* Define a method that takes an `Animal` object as a parameter and yet be able to pass `Dog` and `Cat` objects to it.
* Call a method on a `Dog` or a `Cat` object as if it is an `Animal` object %%(i.e., without knowing whether it is a `Dog` object or a `Cat` object)%% and get a different response from it based on its actual class %%e.g., call the `Animal` class' method `speak()` on object `a` and get a `Meow` as the return value if `a` is a `Cat` object and `Woof` if it is a `Dog` object%%.
</box>

_Polymorphism_ literally means "ability to take many forms".

</div>

<div id="extras">
</div>