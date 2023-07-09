<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can identify event-driven architectural style</span>

<div id="body">

**_Event-driven_ style controls the flow of the application by detecting <tooltip content="An event is a notable occurrence that happens inside or outside the software, such as the user clicking a button, a timer running out, minimizing a window, etc.">events</tooltip> from event _emitters_ and communicating those events to interested event _consumers_.** This architectural style is often used in GUIs.

<pic src="{{baseUrl}}/architecture/architecturalStyles/eventDriven/what/images/eventDriven.png" width="450" />

<box>

{{ icon_example }} When the ‘button clicked’ event occurs in a GUI, that event can be transmitted to components that are interested in reacting to that event. Similarly, events detected at a printer port can be transmitted to components related to operating the printer. The same event can be sent to multiple consumers too.

<pic src="{{baseUrl}}/architecture/architecturalStyles/eventDriven/what/images/eventDrivenExamples.png" width="450" />

</box>

</div>

<div id="extras">
</div>
