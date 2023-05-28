<panel header="{{ icon_Q_A }} Draw class diagram: `Player`, `Bot`, etc.">

(a) Draw a class diagram to represent the following code.

```java
interface Player {
    public void challenge();
}

interface Trainable {
    public void train();
}

abstract class Bot implements Player {

}

class TrainableBot extends Bot implements Trainable {

    @Override
    public void challenge() {

    }

    @Override
    public void train() {

    }
}

class Human implements Player {

    @Override
    public void challenge() {

    }
}
```

(b) Add these association classes to the diagram:<br>
i. A `Player` object can _challenge_ another `Player` object. The `Challenge` class keeps track of the association between the two `Player` objects: the _challenger_ and the _target_ of the challenge.<br>
ii. A `Human` object can _train_ a `SmartBot` object. The `Lesson` class keeps track of that association.


(c) Convert the two association classes to normal classes.

<panel header=":key: (a)">

<pic src="{{baseUrl}}/modeling/modelingStructures/classDiagramsAdvanced/images/playerBotA.png" height="250" />
<p/>

<p/>

</panel>
<panel header=":key: (b)">

<pic src="{{baseUrl}}/modeling/modelingStructures/classDiagramsAdvanced/images/playerBotB.png" height="310" />
<p/>

<p/>

</panel>
<panel header=":key: (c)">

<pic src="{{baseUrl}}/modeling/modelingStructures/classDiagramsAdvanced/images/playerBotC.png" height="290" />
<p/>

<p/>

</panel>

<div slot="answer">



</div>
</question>
</panel>
