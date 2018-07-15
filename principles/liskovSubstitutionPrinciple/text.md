<div id="title">

#### Liskov Substitution Principle

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain Liskov Substitution Principle</span>

<div id="body">

<tip-box type="definition">
  <include src="../../common/definitions.md#def-liskov-substitution-principle" />
</tip-box>

LSP sounds same as <trigger large trigger="click" for="modal:lsp-substitutability">substitutability</trigger> but it goes beyond substitutability; **LSP implies that a subclass should not be more restrictive than the behavior specified by the superclass.** As we know, Java has language support for substitutability. However, if LSP is not followed, substituting a subclass object for a superclass object can break the functionality of the code.

<modal large title="Textbook {{ icon_embedding }}" id="modal:lsp-substitutability">
  <include src="../../oop/inheritance/substitutability/unit-inElsewhere-asFlat.md" boilerplate/>
</modal> 

<tip-box>

{{ icon_example }} Suppose the `Payroll` class depends on the `adjustMySalary(int percent)` method of the `Staff` class. Furthermore, the `Staff` class states that the `adjustMySalary` method will work for all positive percent values. Both `Admin` and `Academic` classes override the `adjustMySalary` method.

<img src="{{baseUrl}}/principles/liskovSubstitutionPrinciple/images/payroll.png" height="200" />
<p/>

Now consider the following:

* `Admin#adjustMySalary` method works for both negative and positive percent values.
* `Academic#adjustMySalary` method works for percent values `1..100` only.

In the above scenario,

* `Admin` class follows LSP because it fulfills `Payroll`’s expectation of `Staff` objects (i.e. it works for all positive values). Substituting `Admin` objects for Staff objects will not break the `Payroll` class functionality.
* `Academic` class violates LSP because it will not work for percent values over `100` as expected by the `Payroll` class. Substituting `Academic` objects for `Staff` objects can potentially break the `Payroll` class functionality.

<panel type="seamless" header="%%Another example%%">

{{ icon_example }} The `Rectangle#resize()` can take any integers for `height` and `width`. This contract is violated by the subclass `Square#resize()` because it does not accept a `height` that is different from the `width`. 

<img src="{{baseUrl}}/principles/liskovSubstitutionPrinciple/images/rectangleSquare.png" height="120" />
<p/>

```java
class Rectangle {
    ...
    /** sets the size to given height and width*/
    void resize(int height, int width){
        ...
    }
}


class Square extends Rectangle {
    
    @Override
    void resize(int height, int width){
        if (height != width) {
            //error
       }
    }
}
```
Now consider the following method that is written to work with the `Rectangle` class.

```java
void makeSameSize(Rectangle original, Rectangle toResize){
    toResize.resize(original.getHeight(), original.getWidth());
}
```
This code will fail if it is called as `maekSameSize(new Rectangle(12,8), new Square(4, 4))` That is, `Square` class is not substitutable for the `Rectangle` class.

</panel>

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>