<panel header="{{ icon_Q_A }} Polymorphism and the Observer pattern">

Explain how polymorphism is used in the Observer pattern.

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

<pic eager src="{{baseUrl}}/designPatterns/observer/what/images/observableInterfaceNotation.png" height="90" />
<p/>

With respect to the general form of the Observer pattern given above, when the Observable object invokes the `notifyObservers()` method, it is treating all `ConcreteObserver` objects as a general type called `Observer` and calling the `update()` method of each of them. However, the `update()` method of each `ConcreteObserver` could potentially show different behavior based on its actual type. That is, the `update()` method shows polymorphic behavior.

In the example given below, the `notifyUIs` operation can result in `StudentListUi` and `StudentStatsUi` changing their views in two different ways.

<pic eager src="{{baseUrl}}/designPatterns/observer/what/images/studentListStudentListObserver.png" height="190" />
<p/>

</panel>
</panel>
