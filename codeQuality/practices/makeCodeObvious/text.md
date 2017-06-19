<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Make the Code Obvious

</div>

<div id="body">

Make the code as explicit as possible, even if the language syntax allows them to be implicit. Here are some examples:

*	Use explicit type conversion instead of implicit type conversion.
*	Use parentheses/braces to show grouping even when they can be skipped.
*	Use enumerations when a certain variable can take only a small number of finite values. For example, instead of declaring the variable 'state' as an integer and using values 0,1,2 to denote the states 'starting', 'enabled', and 'disabled' respectively, declare 'state' as type `SystemState` and define an enumeration `SystemState` that has values `'STARTING'`, `'ENABLED'`, and `'DISABLED'`.
*	When statements should follow a particular order, try to make it obvious (with appropriate naming, or at least comments). For example, if you name two functions `'taskA()'` and `'taskB()'`, it is not obvious which one should be called first.  Contrast this with naming the functions `'phaseOne()'` and `'phaseTwo()'` instead. This is especially important when statements in one function must be called before the other one.

</div>

</div>
