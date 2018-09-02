<div id="title">

#### Abstract Classes and Methods

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can implement abstract classes</span>

<div id="body">

<box type="definition">

<include src="../../../common/definitions.md#def-abstractClass" /> 
  
</box>

**You can use declare a class as abstract when a class is merely a representation of commonalities among its subclasses** in which case it does not make sense to instantiate objects of that class.

<box>

{{ icon_example }} The `Animal` class that exist as a generalization of its subclasses `Cat`, `Dog`, `Horse`, `Tiger` etc. can be declared as abstract because it does not make sense to instantiate an `Animal` object.

</box>

<box type="definition">

<include src="../../../common/definitions.md#def-abstractMethod" />
 
</box>

<box>

{{ icon_example }} The `move` method of the `Animal` class is likely to be an abstract method as it is not possible to implement a `move` method at the `Animal` class level to fit all subclasses %%because each animal type can move in a different way%%.

</box>

**A class that has an abstract method becomes an abstract class** because the class definition is incomplete (due to the missing method body) and it is not possible to create objects using an incomplete class definition.

Evan **a class that does not have any abstract methods _can_ be declared as an abstract class.**


</div>

<div id="extras">
</div>