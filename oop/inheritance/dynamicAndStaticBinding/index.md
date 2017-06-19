<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

#### Inheritance: Dynamic and Static Binding

<div id="main">

Overridden operations are **resolved at runtime**. That is, the runtime decides which version of the operation should be executed based on the actual type of the receiving object. This is also called _dynamic binding_ (sometimes called _late binding_  and _run-time binding_). Most OO languages support dynamic binding.

<tip-box type="info">

There are subtle differences between late binding and dynamic binding, but they are beyond the scope of this document.

</tip-box>

<tip-box>

Example:

<img src="{{baseUrl}}/oop/inheritance/dynamicAndStaticBinding/images/staff.png" height="150" />
<p/>

```
void adjustSalary(int byPercent) {
    for (Staff s: staff) {
        s.adjustSalary(byPercent);
    }
}
```

The **declared** type of s is `Staff` and it appears as if the `adjustSalary(int)` operation of the `Staff` class is invoked. However, at runtime the `adjustSalary(int)` operation of the actual object will be called (i.e. `adjustSalary(int)` operation of Admin or Academic). If the actual object does not override that operation, the operation defined in the immediate superclass (in this case, Staff class) will be called.

</tip-box>

In contrast, overloaded methods are resolved at compile time, also called _static binding_ (also called _early binding_ and _compile-time binding_.)

<tip-box>

```
class Account {
    Account () {
        // Signature: ()
        ...
    }
    Account (String name, String number, double balance) {
        // Signature: (String, String, double)
        ...
    }
}
```

```
void calculateCAP (String matric) { ... }
void calculateCAP (int[] averages) { ... }
```

The calls to the two constructors are resolved at compile time.

</tip-box>

<!-- extras ------------------------------------------------------------------------------------ -->

<panel header=":paperclip: Extras" expandable type="seamless" expanded>

  <panel header=":mortar_board: Learning Outcomes" expandable type="seamless">
    <include src="exercises.md" />
  </panel>

  <panel header=":package: Resources" expandable type="seamless">
    <include src="resources.md" />
  </panel>

</panel>

</div>
</div>
