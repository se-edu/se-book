<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### What :one:

</div>

<div id="body">

<tip-box type="definition">
<include src="../../../common/definitions.md#def-abstraction" />
</tip-box>

Most programs are written to solve complex problems involving large amounts of intricate details. It is impossible to deal with all these details at the same time.  The guiding principle of abstraction stipulates that we capture only details that are relevant to the current perspective or the task at hand. 

**Ignoring lower level data items and thinking in terms of bigger entities is called _data abstraction_.**

<tip-box> 

:package: Within a certain software component, we might deal with a _user_ data type, while ignoring the details contained in the user data item such as _name_, and _date of birth_. These details have been ‘abstracted away’ as they do not affect the task of that software component.

</tip-box>

**_Control abstraction_ abstracts away details of the actual control flow to focus on tasks at a simplified level.**
 
<tip-box> 

:package: `print(“Hello”)` is an abstraction of the actual output mechanism within the computer.

</tip-box>For example, 

**Abstraction can be applied repeatedly to obtain progressively _higher levels of abstractions_.** 

<tip-box> 

:package: An example of different levels of data abstraction: a `File` is a data item that is at a higher level than an array and an array is at a higher level than a bit. 

:package: An example of different levels of control abstraction: `execute(Game)` is at a higher level than `print(Char)` which is at a higher than an Assembly language instruction `MOV`.

</tip-box>

</div>

<div id="extras">
</div>

</div>
