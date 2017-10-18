<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Sequence Diagrams - Basic :one:

</div>

<div id="body">

<tip-box> 

:package: Consider the code below.

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
Here is the sequence diagram to model the interactions for the method call `procudePrototype()` on a `Machine` object.

<img src="{{baseUrl}}/modeling/modelingBehaviors/sequenceDiagramsBasic/images/Machine.png" width="450" />
<p/>

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>

</div>
