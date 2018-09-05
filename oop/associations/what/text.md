<div id="title">

#### Basic

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain associations</span>

<div id="body">

Objects in an OO solution need to be connected to each other to form a network so that they can interact with each other. Such **connections between objects are called _associations_.**

<tip-box>

{{ icon_example }} Suppose an OOP program for managing a learning management system creates an object structure to represent the related objects. In that object structure we can expect to have associations between a`Course` object that represents a specific course and `Student` objects that represents students taking that course.

</tip-box>

**Associations in an object structure can change over time**.

<tip-box>

{{ icon_example }} To continue the previous example, the associations between a `Course` object and `Student` objects can change as students enroll in the module or drop the module over time.

</tip-box>

**Associations among objects can be generalized as associations between the corresponding classles too.**

<tip-box> 

{{ icon_example }} In our example, as some `Course` objects can have associations with some `Student` objects, we can view it as an association between the `Course` class and the `Student` class.

</tip-box>

##### Implementing associations

**We use instance level variables to implement associations.**

</div>

<div id="extras">
</div>