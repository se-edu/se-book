<div id="title">

#### Enumerations

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the meaning of enumerations</span>

<div id="body">

**An _Enumeration_ is a fixed set of values that can be considered as a data type.** An enumeration is often useful when using a regular data type such as `int` or `String` would allow invalid values to be assigned to a variable. **You are recommended to enumeration types any time you need to represent a fixed set of constants.**

<box>

{{ icon_example }} Suppose you want a variable to store the priority of something. There are only three priority levels: high, medium, and low. You can declare the variable as of type `int` and use only values `2`, `1`, and `0` to indication the three priority levels. However, this opens the possibility of an invalid values such as `9` to be assigned to it. But if you define an enumeration type called `Priority` that has three values `HIGH`, `MEDIUM`, `LOW` only, a variable of type `Priority` will never be assigned an invalid value because the compiler is able to catch such an error.

`Priority`: `HIGH`, `MEDIUM`, `LOW`

</box>

</div>

<div id="extras">
</div>