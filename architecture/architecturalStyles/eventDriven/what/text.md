<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can identify the event-driven architectural style</span>

<div id="body">

**In the event-driven style, work is triggered by events rather than by direct calls.** An <tooltip content="An event is a notable occurrence that happens inside or outside the software, such as the user clicking a button, a timer running out, minimizing a window, etc.">event</tooltip> is a notable occurrence, such as a button being clicked, a timer expiring, or a download finishing. The component that detects it is the _emitter_; components that react are _consumers_.

<pic eager src="{{baseUrl}}/architecture/architecturalStyles/eventDriven/what/images/eventDriven.png" width="450" />

**If you have written a graphical user interface, you have written event-driven code.** A button does not contain the logic that runs after a click; the UI framework delivers the click event to whatever handler registered for it. You never wrote code asking "has the button been pressed yet?"

<box>

{{ icon_example }} When the 'button clicked' event occurs in a GUI, that event can be transmitted to components interested in reacting to it. Similarly, events detected at a printer port can be transmitted to components related to operating the printer. The same event can be sent to multiple consumers too.

<pic eager src="{{baseUrl}}/architecture/architecturalStyles/eventDriven/what/images/eventDrivenExamples.png" width="450" />

</box>

**Event delivery has two separate dimensions, often bundled together by mistake:**

* **Local or distributed.** Events may be delivered inside one program, or across a network between separate programs.
* **Synchronous or asynchronous.** The emitter may wait for consumers to finish, or carry on immediately while they are notified later.

**Calling a design "event-driven" settles neither dimension.** A GUI button click is local, and it is not strictly synchronous either: the click is usually placed on a local event queue and handled shortly afterward by the interface thread. It is still fully event-driven.

**Distributed event-driven systems often use publish-subscribe communication.** An emitter publishes an event to a _message broker_, which delivers it to whichever components have subscribed. The emitter need not know which consumers exist, and one event can reach any number of them.

**The trade is decoupling in exchange for traceability.** A new consumer can subscribe without the emitter changing at all — but the list of consumers still exists (the framework or broker holds it), it is just no longer visible where the event is raised. To answer "what happens when a task is deleted?" you may have to find several handlers, and no single place in the code tells you.

</div>

<div id="extras">
</div>
