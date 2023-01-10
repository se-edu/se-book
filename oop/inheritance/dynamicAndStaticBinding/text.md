<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain dynamic and static binding</span>

<span id="title">Dynamic and static binding</span>

<div id="body">

<box type="definition" seamless>
<include src="../../../common/definitions.md#def-dynamic-binding" trim />
</box>

**<trigger trigger="click" for="modal:dynamicAndStatic-overriding">Overridden methods</trigger> are resolved using dynamic binding, and therefore resolves to the implementation in the actual type of the object.**

<modal large header="Textbook {{ icon_embedding }}" id="modal:dynamicAndStatic-overriding">
  <include src="../overriding/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<box>

{{ icon_example }} Consider the code below. The declared type of `s` is `Staff` and it appears as if the `adjustSalary(int)` operation of the `Staff` class is invoked.

```java
void adjustSalary(int byPercent) {
    for (Staff s: staff) {
        s.adjustSalary(byPercent);
    }
}
```
However, at runtime `s` can receive an object of any subclass of `Staff`. That means the `adjustSalary(int)` operation of the actual subclass object will be called. If the subclass does not override that operation, the operation defined in the superclass (in this case, `Staff` class) will be called.

</box>

<box type="definition" seamless>
<include src="../../../common/definitions.md#def-static-binding" trim />
</box>

**In contrast, <trigger trigger="click" for="modal:dynamicAndStatic-overloading">overloaded</trigger> methods are resolved using static binding.**

<modal large header="Textbook {{ icon_embedding }}" id="modal:dynamicAndStatic-overloading">
  <include src="../overloading/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<box>

{{ icon_example }} Note how the constructor is overloaded in the class below. The method call `new Account()` is bound to the first constructor at compile time.

```java
class Account {

    Account() {
        // Signature: ()
        ...
    }

    Account(String name, String number, double balance) {
        // Signature: (String, String, double)
        ...
    }
}
```

{{ icon_example }} Similarly, the `calculateGrade` method is overloaded in the code below and a method call `calculateGrade("A1213232")` is bound to the second implementation, at compile time.

```java
void calculateGrade(int[] averages) { ... }
void calculateGrade(String matric) { ... }
```
</box>

</div>

<div id="extras">
</div>
