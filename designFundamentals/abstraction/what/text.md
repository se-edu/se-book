<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain abstraction</span>

<div id="body">

<box type="definition" seamless>
<include src="../../../common/definitions.md#def-abstraction" />
</box>

**The guiding principle of abstraction is that only details that are relevant to the current perspective or the task at hand needs to be considered.** As most programs are written to solve complex problems involving large amounts of intricate details, it is impossible to deal with all these details at the same time. That is where abstraction can help.

**==_Data abstraction_==: abstracting away the lower level data items and thinking in terms of bigger entities**

<box>

{{ icon_example }} Within a certain software component, you might deal with a _user_ data type, while ignoring the details contained in the user data item such as _name_, and _date of birth_. These details have been ‘abstracted away’ as they do not affect the task of that software component.

</box>

**==_Control abstraction_==: abstracting away details of the actual control flow to focus on tasks at a higher level**
 
<box>

{{ icon_example }} `print(“Hello”)` is an abstraction of the actual output mechanism within the computer.

</box>

**Abstraction can be applied repeatedly to obtain progressively _higher levels of abstractions_.** 

<box>

{{ icon_example }} An example of different levels of data abstraction: a `File` is a data item that is at a higher level than an array and an array is at a higher level than a bit. 

{{ icon_example }} An example of different levels of control abstraction: `execute(Game)` is at a higher level than `print(Char)` which is at a higher than an Assembly language instruction `MOV`.

</box>

**Abstraction is a general concept that is not limited to just data or control abstractions.**

<box>

{{ icon_example }} Some more general examples of abstraction:

* An OOP _class_ is an abstraction over related data and behaviors.
* An _architecture_ is a higher-level abstraction of the design of a software.
* Models (e.g., UML models) are abstractions of some aspect of reality.

</box>

</div>

<div id="extras">
</div>
