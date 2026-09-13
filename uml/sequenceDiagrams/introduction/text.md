{% from "common/macros.njk" import show_term with context %}
<span id="title">Introduction</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain/identify sequence diagrams</span>

<div id="body">

**A UML {{ show_term("sequence diagram") }} _captures the interactions between multiple entities for a given scenario._**

<box>

{{ icon_example }} Consider the code below.

```java
class Workflow {

    Step executeStep() {
        Step step = new Step();
        if (step.isValid()) {
            step.execute();
        }
        return step;
    }
}

class Step {
    public void execute() {
        // ...
    }
}
```
Here is the sequence diagram to model the interactions for the method call `producePrototype()` on a `Machine` object.

<pic eager class="tbg" src="{{baseUrl}}/uml/sequenceDiagrams/introduction/images/workflow.svg" width="518" />
<p/>

</box>

</div>

<div id="extras">
</div>
