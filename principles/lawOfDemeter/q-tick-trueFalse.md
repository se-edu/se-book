<panel header=":lock::key: True or False?">
<question>

This violates Law of Demeter.

```java
void foo(Bar b) {
    Goo g =  new Goo();
    g.doSomething();
}
```

- [ ] a. True
- [ ] b. False

<div slot="answer">

- [ ] a. True
- [x] b. False

Explanation: The line “g.doSomething()” does not violate LoD because it is OK to invoke methods of objects created within a method. 

</div>
</question>
</panel>
