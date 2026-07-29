{% from "common/macros.njk" import show_example, show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain abstraction</span>

<div id="body">

<box type="definition" seamless>
<include src="../../../common/definitions.md#def-abstraction" trim />
</box>

**The guiding principle of {{ show_term("abstraction") }} is that only details that are relevant to the current perspective or the task at hand need to be considered.** As most programs are written to solve complex problems involving large amounts of intricate details, it is impossible to deal with all these details at the same time. That is where abstraction can help.

**{{ show_term("Data abstraction") }}: abstracting away the lower level data items and thinking in terms of bigger entities**<br>
{{ label_example }} %%Within a certain software component, you might deal with a _user_ data type, while ignoring the details contained in the user data item such as _name_ and _date of birth_. These details have been ‘abstracted away’ as they do not affect the task of that software component.%%

**{{ show_term("Control abstraction") }}: abstracting away details of the actual control flow to focus on tasks at a higher level**<br>
{{ label_example }} %%`print("Hello")` is an abstraction of the actual output mechanism within the computer.%%

**Abstraction can be applied repeatedly to obtain progressively _higher levels of abstraction_.**<br>
{{ label_example }} %%Levels of data abstraction: a `File` is a data item that is at a higher level than an array, and an array is at a higher level than a bit.%%<br>
{{ label_example }} %%Levels of control abstraction: `execute(Game)` is at a higher level than `print(Char)`, which is at a higher level than an Assembly language instruction `MOV`.%%

**Abstraction is a general concept that is not limited to just data or control abstractions.**

{% call show_example() %}
More general forms of abstraction:

* An OOP _class_ is an abstraction over related data and behaviors.
* An _architecture_ is a higher-level abstraction of the design of a software system.
* Models (e.g., UML models) are abstractions of some aspect of reality.
{% endcall %}

</div>

<div id="extras">
</div>
