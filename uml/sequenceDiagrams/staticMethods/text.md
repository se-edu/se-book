<span id="title">Calls to Static Methods</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can show calls to static methods</span>

<div id="body">

Method calls to `static` i.e., class-level method are received by the class itself, not an instance of that class. We can use the `<<class>>` to show that a participant is the class itself. 

<box>

{{ icon_example }} In this example, `m` calls the static method `Person.getMaxAge()` and also the `setAge()` method of a `Person` object `p`.
 
<img src="images/staticMethodCall.png" />
<p/>

Here is the `Person` class, for reference:<br>
<img src="images/personClass.png" />
</box>

</div>

<div id="extras">
</div>
