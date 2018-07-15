<panel header="{{ icon_Q_A }} statements about dependency injection">
<question>

Choose correct statement about dependency injection

- [ ] a. It is a technique for increasing dependencies
- [ ] b. It is useful for unit testing
- [ ] c. It can be done using polymorphism
- [ ] d. It can be used to substitute a component with a stub

<div slot="answer">

~~(a)~~(b)(c)(d)

Explanation: It is a technique we can use to substitute an existing dependency with another, not increase dependencies. It is useful when you want to test a component in isolation but the SUT depends on other components. Using dependency injection, we can substitute those other components with test-friendly stubs. This is often done using polymorphism.

</div>
</question>
</panel>
