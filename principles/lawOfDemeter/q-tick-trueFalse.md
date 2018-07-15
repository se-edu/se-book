<panel header="{{ icon_Q_A }} LoD violation?">
<question>

This violates Law of Demeter.

```java
void foo(Bar b) {
    Goo g =  new Goo();
    g.doSomething();
}
```

- ( ) True
- ( ) False

<div slot="answer">

False

Explanation: The line `g.doSomething()` does not violate LoD because it is OK to invoke methods of objects created within a method. 

</div>
</question>
</panel>
