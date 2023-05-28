<span id="title">Introduction</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain/identify sequence diagrams</span>

<div id="body">

**A UML sequence diagram _captures the interactions between multiple objects for a given scenario._**

<box>

{{ icon_example }} Consider the code below.

```java
class Machine {

    Unit producePrototype() {
        Unit prototype = new Unit();
        for (int i = 0; i < 5; i++) {
            prototype.stressTest();
        }
        return prototype;
    }
}

class Unit {

    public void stressTest() {

    }
}

```
Here is the sequence diagram to model the interactions for the method call `producePrototype()` on a `Machine` object.

<pic src="{{baseUrl}}/uml/sequenceDiagrams/introduction/images/Machine.png" width="450" />
<p/>

</box>

</div>

<div id="extras">
</div>
