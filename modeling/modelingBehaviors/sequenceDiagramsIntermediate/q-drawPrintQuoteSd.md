<panel header="{{ icon_Q }} Draw Sequence Diagram for printing a quote">

Draw a sequence diagram to represent this code snippet.

```java
if (isFirstPage) {
    new Quote().print();
}
```

The `Quote` class:
```java
class Quote {

    String q;

    Quote() {
        q = generate();
    }

    String generate() {
        // ...
    }

    void print() {
        System.out.println(q);
    }

}
```

<panel type="seamless" header="Hint" minimized>

* Show `new Quote().print();` as two method calls.
* As the created Quote object is not assigned to a variable, it can be considered as 'deleted' soon after its `print()` method is called.

</panel>
</panel>
