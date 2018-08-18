<div id="title">

#### Garbage Collection

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain Java garbage collection</span>

<div id="body">

What happens when no variables refer to an object?
```java
Point spot = new Point(3, 4);
spot = null;
```
The first line creates a new `Point` object and makes spot refer to it. The second line changes `spot` so that instead of referring to the object, it refers to nothing. If there are no references to an object, there is no way to access its attributes or invoke a method on it. From the programmer’s view, it ceases to exist. However it’s still present in the computer’s memory, taking up space.

{{ different }} **In Java, you don’t have to delete objects you create when they are no longer needed.** As your program runs, the system automatically looks for stranded objects and reclaims them; then the space can be reused for new objects. This process is called _garbage collection_. You don’t have to do anything to make garbage collection happen, and in general don’t have to be aware of it. But in high-performance applications, you may notice a slight delay every now and then when Java reclaims space from discarded objects.

</div>

<div id="extras">
</div>