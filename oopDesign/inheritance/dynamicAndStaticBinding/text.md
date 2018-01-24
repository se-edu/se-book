<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming → Inheritance →</div>

<div id="title">

#### Dynamic and Static Binding :three:

</div>

<div id="body">

<tip-box type="definition"> 
  <include src="../../../common/definitions.md#def-dynamic-binding" />
</tip-box>

**<trigger trigger="click" for="modal:dynamicAndStatic-overriding">Overridden methods</trigger> are resolved using dynamic binding, and therefore resolves to the implementation in the actual type of the object.**

<modal large title="Textbook »" id="modal:dynamicAndStatic-overriding">
  <include src="../../../oopImplementation/overriding/full.md"/>
</modal>

<tip-box>

:package: Consider the code below. The declared type of `s` is `Staff` and it appears as if the `adjustSalary(int)` operation of the `Staff` class is invoked. 

<img src="{{baseUrl}}/oopDesign/inheritance/dynamicAndStaticBinding/images/staff.png" height="150" />
<p/>

```java
void adjustSalary(int byPercent) {
    for (Staff s: staff) {
        s.adjustSalary(byPercent);
    }
}
```
However, at runtime the `adjustSalary(int)` operation of the actual object will be called (i.e. `adjustSalary(int)` operation of `Admin` or `Academic`). If the actual object does not override that operation, the operation defined in the immediate superclass (in this case, `Staff` class) will be called.

</tip-box>

<tip-box type="definition"> 
  <include src="../../../common/definitions.md#def-static-binding" />
</tip-box>

**In contrast, <trigger trigger="click" for="modal:dynamicAndStatic-overloading">overloaded</trigger> methods are resolved using static binding.**

<modal large title="Textbook »" id="modal:dynamicAndStatic-overloading">
  <include src="../../../oopImplementation/overloading/full.md"/>
</modal>

<tip-box>

:package: Note how the constructor is overloaded in the class below. The method call `new Account()` is bound to the first constructor at compile time.

```java
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

:package: Similarly, the `calcuateGrade` method is overloaded in the code below and a method call `calculateGrade("A1213232")` is bound to the second implementation, at compile time. 
```
void calculateGrade (int[] averages) { ... }
void calculateGrade (String matric) { ... }
```
</tip-box>

</div>

<div id="extras">
</div>

</div>
