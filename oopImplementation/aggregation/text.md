<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Object Oriented Programming :arrow_right:</div>

<div id="title">

#### Aggregation :two:

</div>

<div id="body">

Implementation is similar to that of aggregation except the ‘containee’ object can exist even after the ‘container’ object is deleted.

<tip-box>

Example:

<img src="{{baseUrl}}/oopImplementation/aggregation/images/carPerson.png" height="40" />
<p/>

```java
class Car {
    Person driver;
    ...
    void drive(Person p) {
        driver = p;
    }
}
```

</tip-box>

</div>

<div id="extras">
<div>

</div>
