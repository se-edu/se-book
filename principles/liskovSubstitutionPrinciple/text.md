<span id="title">Liskov substitution principle</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain Liskov Substitution Principle</span>

<div id="body">

<box type="definition" seamless>
<include src="../../common/definitions.md#def-liskov-substitution-principle" trim />
</box>

LSP sounds the same as <trigger large trigger="click" for="modal:lsp-substitutability">substitutability</trigger> but it goes beyond substitutability; **LSP implies that a subclass should not be more restrictive than the behavior specified by the superclass.** As you know, Java has language support for substitutability. However, if LSP is not followed, substituting a subclass object for a superclass object can break the functionality of the code.

<modal large header="Textbook {{ icon_embedding }}" id="modal:lsp-substitutability">
  <include src="../../oop/inheritance/substitutability/unit-inElsewhere-asFlat.md" boilerplate/>
</modal>

<box>

{{ icon_example }} Suppose the `Payroll` class depends on the `adjustMySalary(int percent)` method of the `Staff` class. Furthermore, the `Staff` class states that the `adjustMySalary` method will work for all positive percent values. Both the `Admin` and `Academic` classes override the `adjustMySalary` method.

<pic eager src="{{baseUrl}}/principles/liskovSubstitutionPrinciple/images/payroll.png" height="200" />
<p/>

Now consider the following:

* The `Admin#adjustMySalary` method works for both negative and positive percent values.
* The `Academic#adjustMySalary` method works for percent values `1..100` only.

In the above scenario,

* The `Admin` class follows LSP because it fulfills `Payroll`’s expectation of `Staff` objects (i.e. it works for all positive values). Substituting `Admin` objects for `Staff` objects will not break the `Payroll` class functionality.
* The `Academic` class violates LSP because it will not work for percent values over `100` as expected by the `Payroll` class. Substituting `Academic` objects for `Staff` objects can potentially break the `Payroll` class functionality.

<panel type="seamless" header="%%Another example%%">

{{ icon_example }} The `Rectangle#resize()` method can take any integers for `height` and `width`. This contract is violated by the subclass `Square#resize()` because it does not accept a `height` that is different from the `width`.

<pic eager src="{{baseUrl}}/principles/liskovSubstitutionPrinciple/images/rectangleSquare.png" height="120" />
<p/>

```java
class Rectangle {
    ...
    /** sets the size to the given height and width*/
    void resize(int height, int width) {
        ...
    }
}


class Square extends Rectangle {

    @Override
    void resize(int height, int width) {
        if (height != width) {
            //error
       }
    }
}
```
Now consider the following method that is written to work with the `Rectangle` class.

```java
void makeSameSize(Rectangle original, Rectangle toResize) {
    toResize.resize(original.getHeight(), original.getWidth());
}
```
This code will fail if it is called as `makeSameSize(new Rectangle(12, 8), new Square(4, 4))`. That is, the `Square` class is not substitutable for the `Rectangle` class.

</panel>

</box>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
