<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right: Inheritance :arrow_right:</div>

<div id="title">

#### Overloading :two:

</div>

<div id="body">

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

</div>

</div>
