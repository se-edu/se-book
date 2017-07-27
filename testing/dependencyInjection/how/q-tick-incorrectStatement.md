<panel header=":lock::key: Choose the INCORRECT statement about dependency injection">
<question>

Choose the INCORRECT statement about dependency injection

- [ ] a. It is a technique for increasing dependencies
- [ ] b. It is useful for unit testing.
- [ ] c. It can be done using polymorphism.
- [ ] d. It can be used to substitute a component with a stub.

<div slot="answer">

- [x] a. It is a technique for increasing dependencies
- [ ] b. It is useful for unit testing.
- [ ] c. It can be done using polymorphism.
- [ ] d. It can be used to substitute a component with a stub.

Explanation: It is a technique we can use to substitute an existing component with another, without breaking its dependent components. It is useful when we want to test a component in isolation but the SUT (i.e., component under test) depends on other components. Using dependency injection, we can substitute those other components with test-friendly stubs. This is often done using polymorphism.

</div>
</question>
</panel>
