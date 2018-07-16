<panel header="{{ icon_Q_A }} polymorphism and Observer pattern.">
<question has-input="true">

Explain how polymorphism is used in the Observer pattern.

<div slot="answer">

<img src="{{baseUrl}}/designPatterns/observer/what/images/observableInterfaceNotation.png" height="90" />
<p/>

With respect to the general form of the Observer pattern given above, when the Observable object invokes the `notifyObservers()` method, it is treating all `ConcreteObserver` objects as a general type called `Observer` and calling the `update()` method of each of them. However, the `update()` method of each `ConcreteObserver` could potentially show different behavior based on its actual type. That is, `update()` method shows polymorphic behavior.

In the example given below, the `notifyUIs` operation can result in `StudentListUi` and `StudentStatsUi` changing their views in two different ways.

<img src="{{baseUrl}}/designPatterns/observer/what/images/studentListStudentListObserver.png" height="190" />
<p/>

</div>
</question>
</panel>
