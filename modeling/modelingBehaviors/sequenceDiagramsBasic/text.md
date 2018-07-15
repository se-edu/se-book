<div id="title">

#### Sequence Diagrams - Basic

</div>

<span id="prereqs"><panel src="../../../uml/sequenceDiagrams/basic/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%UML → Sequence Diagrams → Basic%%" />
<panel src="../../../uml/sequenceDiagrams/loops/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%UML → Sequence Diagrams → Loops%%" />
<panel src="../../../uml/sequenceDiagrams/objectCreation/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%UML → Sequence Diagrams → Object Creation%%" />
<panel src="../../../uml/sequenceDiagrams/minimalNotation/unit-inElsewhere-asFlat.md" boilerplate header="{{ icon_prereq }} %%UML → Sequence Diagrams → Minimal Notation%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can draw basic sequence diagrams</span>

<div id="body">

**Sequence diagrams model interactions between entities for a given scenario.**

<tip-box> 

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
Here is the sequence diagram to model the interactions for the method call `prouducePrototype()` on a `Machine` object.

<img src="{{baseUrl}}/modeling/modelingBehaviors/sequenceDiagramsBasic/images/Machine.png" width="450" />
<p/>

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>