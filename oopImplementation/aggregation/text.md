<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Aggregation :two:

</div>

<div id="body">

Implementation is similar to that of composition except the _containee_ object can exist even after the _container_ object is deleted.

<tip-box>

:package: Example:

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
</div>

</div>
