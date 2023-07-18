<panel header="{{ icon_Q_A }} LoD violation?">

This violates the Law of Demeter.

```java
void foo(Bar b) {
    Goo g = new Goo();
    g.doSomething();
}
```

- ( ) True
- ( ) False

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

False

Explanation: The line `g.doSomething()` does not violate LoD because it is OK to invoke methods of objects created within a method.

</panel>
</panel>
