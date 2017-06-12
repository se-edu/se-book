<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

#### Inheritance: Overloading

<div id="main">

Method overloading arises when there are multiple operations with the **same name but different type signatures.**

<tip-box type="primary">

<include src="../../../common/definitions.md#def-type-signature" />

</tip-box>

<tip-box>

Example:

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

The constructor `Account` and method `calculateCAP` has been overloaded.

</tip-box>

Overloading is used to indicate that multiple operations do similar things but take different parameters. An operation can be overloaded inside the same class or in a sub/super classes.

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
