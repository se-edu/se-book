<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right:</div>

<div id="title">

#### Composition :two:

</div>

<div id="body">

Composition too is implemented using a normal variable. If correctly implemented, the ‘part’ object will be deleted when the ‘whole’ object is deleted. Ideally, the ‘part’ object may not even be visible to clients of the ‘whole’ object.

<tip-box>

Example:

<img src="{{baseUrl}}/oopImplementation/composition/images/carEngine.png" height="40" />
<p/>

```java
class Car {
    Engine engine;
  ...
}
```

</tip-box>

</div>

</div>
