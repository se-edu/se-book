<span id="title">Class-Level Members</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain class-level members</span>

<div id="body">

While all objects of a class has the same attributes, each object has its own copy of the attribute value.

<box>

{{ icon_example }} All `Person` objects have the `Name` attribute but the value of that attribute varies between `Person` objects.

</box>

However, some attributes are not suitable to be maintained by individual objects. Instead, they should be maintained centrally, shared by all objects of the class. They are like ‘global variables’ but attached to a specific class. Such **variables whose value is shared by all instances of a class are called ==_class-level attributes_==**.

<box>

{{ icon_example }} The attribute `totalPersons` should be maintained centrally and shared by all `Person` objects rather than copied at each `Person` object.  

</box>

Similarly, when a normal method is being called, a message is being sent to the receiving object and the result may depend on the receiving object.

<box>

{{ icon_example }} Sending the `getName()` message to the `Adam` object results in the response `"Adam"` while sending the same message to the `Beth` object results in the response `"Beth"`.

</box>

However, there can be methods related to a specific class but not suitable for sending message to a specific object of that class. Such **methods that are called using the class instead of a specific instance are called ==_class-level methods_==**.

<box>

{{ icon_example }} The method `getTotalPersons()` is not suitable to send to a specific `Person` object %%because a specific object of the `Person` class should not have to know about the total number of `Person` objects%%.

</box>

**Class-level attributes and methods are collectively called ==_class-level members_==** (also called _static members_ sometimes because some programming languages use the keyword `static` to identify class-level members). **They are to be accessed using the class name rather than an instance of the class**.


</div>

<div id="extras">
  <include src="exercises.md" />
</div>