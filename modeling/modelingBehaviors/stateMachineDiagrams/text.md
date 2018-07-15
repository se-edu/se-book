<div id="title">

#### State Machine Diagrams

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain state machine diagrams</span>

<div id="body">

**A _State Machine Diagram_ models state-dependent behavior.**

<tip-box> 

{{ icon_example }} Consider how a CD player responds when the “eject CD” button is pushed:

* If the CD tray is already open, it does nothing.
* If the CD tray is already in the process of opening (opened half-way), it continues to open the CD tray.
* If the CD tray is closed and the CD is being played, it stops playing and opens the CD tray.
* If the CD tray is closed and CD is not being played, it simply opens the CD tray.
* If the CD tray is already in the process of closing (closed half-way), it waits until the CD tray is fully closed and opens it immediately afterwards.

What this means is that the CD player’s response to pushing the “eject CD” button depends on what it was doing at the time of the event. More generally, the CD player’s response to the event received depends on its internal state. Such a behavior is called a _state-dependent behavior_.

</tip-box>


Often, state-dependent behavior displayed by an object in a system is simple enough that it needs no extra attention; such a behavior can be as simple as a _conditional_ behavior like `if x>y, then x=x-y`.
Occasionally, objects may exhibit state-dependent behavior that is complex enough such that it needs to be captured into a separate model. Such state-dependent behavior can be modelled using UML _state machine diagrams_ (SMD for short, sometimes also called ‘state charts’, ‘state diagrams’ or ‘state machines’).

An SMD views the life-cycle of an object as consisting of a finite number of states where each state displays a unique behavior pattern.  An SMD captures information such as the states an object can be in, during its lifetime, and how the object responds to various events while in each state and how the object transits from one state to another. In contrast to sequence diagrams that capture object behavior one scenario at a time, SMDs capture the object’s behavior over its full life cycle. 

<tip-box>

{{ icon_example }} An SMD for the Minesweeper game. 

<img src="{{baseUrl}}/modeling/modelingBehaviors/stateMachineDiagrams/images/minesweeper.png" height="200" />
<p/>

</tip-box>

</div>

<div id="extras">
</div>