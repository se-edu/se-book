<div id="title">

#### Make the Code Obvious

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: make the code obvious </span>

<div id="body">

Make the code as explicit as possible, even if the language syntax allows them to be implicit. Here are some examples:

* [`Java`] Use explicit type conversion instead of implicit type conversion.
* [`Java`, `Python`] Use parentheses/braces to show grouping even when they can be skipped.
* [`Java`, `Python`] Use <trigger trigger="click" for="modal:obviousCode-enums">enumerations</trigger> when a certain variable can take only a small number of finite values. For example, instead of declaring the variable 'state' as an integer and using values 0,1,2 to denote the states 'starting', 'enabled', and 'disabled' respectively, declare 'state' as type `SystemState` and define an enumeration `SystemState` that has values `'STARTING'`, `'ENABLED'`, and `'DISABLED'`.

<modal title="More about enumerations" id="modal:obviousCode-enums">

* [More about Java enumerations]({{ java_tutorial }}/java/javaOO/enum.html)
* [More about Python enumerations](https://docs.python.org/3/library/enum.html)

</modal>

</div>

<div id="extras">
</div>