<span id="title">How</span>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Design → Design Fundamentals → Coupling → What%%" popup-url="{{ baseUrl }}/designFundamentals/coupling/what" /></span>

<span id="outcomes">{{ icon_outcome }} Can reduce coupling</span>

<div id="body">

**X is _coupled_ to Y if a change to Y can ==potentially== require a change in X**.

<box>

{{ icon_example }} If the `Foo` class calls the method `Bar#read()`, `Foo` is coupled to `Bar` because a change to `Bar` can potentially (but not always) require a change in the `Foo` class %%e.g. if the signature of `Bar#read()` is changed, `Foo` needs to change as well, but a change to the `Bar#write()` method may not require a change in the `Foo` class because `Foo` does not call `Bar#write()`%%.

<panel type="seamless" header="%%code for the above example%%">

```java
class Foo {
    ...
    new Bar().read();
    ...
}

class Bar {
    void read() {
        ...
    }

    void write() {
        ...
    }
}
```
</panel>

</box>


<box>

{{ icon_example }} Some examples of coupling: `A` is coupled to `B` if,

* `A` has access to the internal structure of `B` (this results in a very high level of coupling)
* `A` and `B` depend on the same global variable
* `A` calls `B`
* `A` receives an object of `B` as a parameter or a return value
* `A` inherits from `B`
* `A` and `B` are required to follow the same data format or communication protocol

</box>


</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
